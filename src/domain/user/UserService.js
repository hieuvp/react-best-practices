/**
 * Created by HieuVP on 1/3/17.
 * @flow
 */
import BaseService from '../BaseService';
import firebaseRepository from '../../data/firebase/FirebaseRepository';

class UserService extends BaseService {

  constructor() {
    super();
  }

  signInWithRedirect() {
    firebaseRepository.signInWithRedirect();
  }

}

export default new UserService();
