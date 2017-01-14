/**
 * Created by HieuVP on 1/2/17.
 * @flow
 */
import firebase from 'firebase';
import Rx from 'rx';
import FirebaseAuthenticator from '../FirebaseAuthenticator';
import { transformIntoUser } from '../FirebaseDataMapper';
import type { User } from '../../../domain/user/User';

export default class GoogleAuthenticator extends FirebaseAuthenticator {
  provider: firebase.auth.GoogleAuthProvider;

  constructor(app: firebase.app.App) {
    super(app);
    this.provider = new firebase.auth.GoogleAuthProvider();
  }

  signInWithPopup(): Rx.Observable<?User> {
    return Rx.Observable.create(async(observer) => {
      await this.auth.signOut();
      try {
        const object = await this.auth.signInWithPopup(this.provider);
        const user = transformIntoUser(object.user);
        observer.onNext(user);
        observer.onCompleted();
      } catch (error) {
        observer.onError(error);
      }
    });
  }

}
