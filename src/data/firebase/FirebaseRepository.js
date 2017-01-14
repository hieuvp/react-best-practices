/**
 * Created by HieuVP on 12/29/16.
 * @flow
 */
import firebase from 'firebase';
import Rx from 'rx';
import BaseRepository from '../BaseRepository';
import GoogleAuthenticator from './auth/GoogleAuthenticator';
import ChannelDataStore from './source/ChannelDataStore';
import MessageDataStore from './source/MessageDataStore';
import { Configuration } from '../../constant';
import type { User } from '../../domain/user/User';

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

  signInWithPopup(): Rx.Observable<?User> {
    return this.googleAuthenticator.signInWithPopup();
  }

  get user(): Rx.Observable<?User> {
    return this.googleAuthenticator.userSubject.asObservable();
  }

}

export default new FirebaseRepository();
