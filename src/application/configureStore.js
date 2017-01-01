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
import DevTools from './DevTools';
import { Configuration } from '../constant';

const middlewares = applyMiddleware(ReduxPromise, ReduxThunk);

let enhancer;
if (Configuration.isDebuggable) {
  enhancer = compose(
    middlewares,
    DevTools.instrument(),
  );
} else {
  enhancer = compose(middlewares);
}

export default function configureStore(reducers) {
  return createStore(reducers, enhancer);
}
