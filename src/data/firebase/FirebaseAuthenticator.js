/**
 * Created by HieuVP on 1/3/17.
 * @flow
 */
import firebase from 'firebase';

export default class FirebaseAuthenticator {
  app: firebase.app.App;

  constructor(app: firebase.app.App) {
    this.app = app;
  }

  get auth(): firebase.auth.Auth {
    return this.app.auth();
  }

}
