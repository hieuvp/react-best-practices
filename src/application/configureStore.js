/**
 * Created by HieuVP on 12/28/16.
 */
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import {
  autoRehydrate,
  persistStore
} from 'redux-persist';
import localForage from 'localforage';
import DevTools from './DevTools';
import { Configuration } from '../constant';

const middlewares = applyMiddleware(ReduxPromise, ReduxThunk);

let enhancer;
const composers = [middlewares, autoRehydrate()];
if (Configuration.isDebuggable) {
  enhancer = compose(...composers, DevTools.instrument());
} else {
  enhancer = compose(...composers);
}

export let store;

export default function configureStore({reducers, whitelist, onComplete}) {
  store = createStore(reducers, enhancer);
  const persistorConfig = {
    whitelist,
    storage: localForage,
  };
  persistStore(store, persistorConfig, onComplete);
  return store;
}
