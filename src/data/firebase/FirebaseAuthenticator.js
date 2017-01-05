/**
 * Created by HieuVP on 1/3/17.
 * @flow
 */
import firebase from 'firebase';
import Rx from 'rx';
import type { User } from '../../domain/user/User';

export default class FirebaseAuthenticator {
  app: firebase.app.App;
  userSubject: Rx.Subject<?User>;

  constructor(app: firebase.app.App) {
    this.app = app;
    this.userSubject = new Rx.Subject();
    this.auth.onAuthStateChanged(this.onAuthStateChanged);
  }

  get auth(): firebase.auth.Auth {
    return this.app.auth();
  }

  onAuthStateChanged = (object: any) => {
    const user: ?User = !object ? undefined : {
        name: object.displayName,
        email: object.email,
        avatar: object.photoURL,
      };
    this.userSubject.next(user);
  };

}
