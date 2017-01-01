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

const middlewares = applyMiddleware(ReduxPromise, ReduxThunk);

const enhancer = compose(
  middlewares,
  DevTools.instrument(),
);

export default function configureStore(reducers) {
  return createStore(reducers, enhancer);
}
