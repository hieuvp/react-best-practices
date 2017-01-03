/**
 * Created by HieuVP on 1/3/17.
 * @flow
 */
import { Observable } from 'rxjs';
import BaseService from '../BaseService';
import type { User } from './User';
import firebaseRepository from '../../data/firebase/FirebaseRepository';

class UserService extends BaseService {

  constructor() {
    super();
  }

  signInWithRedirect() {
    firebaseRepository.signInWithRedirect();
  }

  get loggedUser(): Observable<?User> {
    return firebaseRepository.user;
  }

}

export default new UserService();
