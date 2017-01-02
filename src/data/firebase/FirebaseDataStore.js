/**
 * Created by HieuVP on 1/2/17.
 * @flow
 */
import firebase from 'firebase';

export default class FirebaseDataStore {
  app: firebase.app.App;

  constructor(app: firebase.app.App) {
    this.app = app;
  }

  get database(): firebase.database.Reference {
    return this.app.database().ref();
  }

}
