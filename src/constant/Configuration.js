/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */

/**
 * @enum
 * @readonly
 */
const Environment = {
  DEVELOPMENT: Symbol('DEVELOPMENT'),
  STAGING: Symbol('STAGING'),
  PRODUCTION: Symbol('PRODUCTION'),
};

/**
 * @type {Environment}
 */
const profile = Environment.DEVELOPMENT;

const isDebuggable: boolean = (process.env.NODE_ENV === 'development');

const language = {
  english: 'en',
  vietnamese: 'vi',
};

const firebase = {
  apiKey: "AIzaSyB23TVsCsywiIN2p1sEu_6RkhtWCQVy7zU",
  authDomain: "awesome-chat-app-9d0b0.firebaseapp.com",
  databaseURL: "https://awesome-chat-app-9d0b0.firebaseio.com",
  storageBucket: "awesome-chat-app-9d0b0.appspot.com",
  messagingSenderId: "415600980218",
};

export default {
  Environment,
  profile,
  isDebuggable,
  language,
  firebase,
};
