/**
 * Created by HieuVP on 12/28/16.
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

/**
 * @type {boolean}
 */
const isDebuggable = (process.env.NODE_ENV === 'development');

const language = {
  english: 'en',
  vietnamese: 'vi',
};

const firebase = (() => {
  switch (profile) {
    case Environment.DEVELOPMENT:
      return {
        apiKey: "AIzaSyD2IF-oUGlDrQQdqG4j1fOHUYX2FMlikuQ",
        authDomain: "awesome-chat-development.firebaseapp.com",
        databaseURL: "https://awesome-chat-development.firebaseio.com",
        storageBucket: "awesome-chat-development.appspot.com",
        messagingSenderId: "736326604442"
      };
    case Environment.STAGING:
      return {
        apiKey: "AIzaSyBE3ZIwEAqXXLHqc92rAz7ffp8M3qItC8U",
        authDomain: "awesome-chat-staging.firebaseapp.com",
        databaseURL: "https://awesome-chat-staging.firebaseio.com",
        storageBucket: "awesome-chat-staging.appspot.com",
        messagingSenderId: "100781343696"
      };
    case Environment.PRODUCTION:
      return {
        apiKey: "AIzaSyAX8mJVDX63c9N178RRXzGFsYW9tqIJHss",
        authDomain: "awesome-chat-production.firebaseapp.com",
        databaseURL: "https://awesome-chat-production.firebaseio.com",
        storageBucket: "awesome-chat-production.appspot.com",
        messagingSenderId: "967250077961"
      };
    default:
      return undefined;
  }
})();

export default {
  Environment,
  profile,
  isDebuggable,
  language,
  firebase,
};
