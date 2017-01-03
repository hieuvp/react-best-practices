/**
 * Created by HieuVP on 1/2/17.
 * @flow
 */
import firebase from 'firebase';
import FirebaseAuthenticator from '../FirebaseAuthenticator';

export default class GoogleAuthenticator extends FirebaseAuthenticator {
  provider: firebase.auth.GoogleAuthProvider;

  constructor(app: firebase.app.App) {
    super(app);
    this.provider = new firebase.auth.GoogleAuthProvider();
  }

  signInWithRedirect() {
    this.auth.signOut();
    this.auth.signInWithRedirect(this.provider);
  }

}
