/**
 * Created by HieuVP on 1/3/17.
 * @flow
 */
import Rx from 'rx';
import BaseService from '../BaseService';
import type { User } from './User';
import firebaseRepository from '../../data/firebase/FirebaseRepository';

class UserService extends BaseService {

  constructor() {
    super();
  }

  signInWithPopup(): Rx.Observable<?User> {
    return firebaseRepository.signInWithPopup();
  }

  get loggedUser(): Rx.Observable<?User> {
    return firebaseRepository.user
      .catch(this.bundleError);
  }

}

export default new UserService();
