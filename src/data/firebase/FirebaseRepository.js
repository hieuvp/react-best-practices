/**
 * Created by HieuVP on 12/29/16.
 * @flow
 */
import firebase from 'firebase';
import BaseRepository from '../BaseRepository';
import GoogleAuthenticator from './auth/GoogleAuthenticator';
import ChannelDataStore from './source/ChannelDataStore';
import MessageDataStore from './source/MessageDataStore';
import { Configuration } from '../../constant';

class FirebaseRepository extends BaseRepository {
  googleAuthenticator: GoogleAuthenticator;
  channelDataStore: ChannelDataStore;
  messageDataStore: MessageDataStore;

  constructor() {
    super();
    const app = firebase.initializeApp(Configuration.firebase);
    this.googleAuthenticator = new GoogleAuthenticator(app);
    this.channelDataStore = new ChannelDataStore(app);
    this.messageDataStore = new MessageDataStore(app);
  }

  signInWithRedirect() {
    this.googleAuthenticator.signInWithRedirect();
  }

}

export default new FirebaseRepository();
