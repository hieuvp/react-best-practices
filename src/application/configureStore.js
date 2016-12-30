/**
 * Created by HieuVP on 12/28/16.
 */
import {
  applyMiddleware,
  createStore
} from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const middlewares = applyMiddleware(ReduxPromise, ReduxThunk);

export default function configureStore(reducers) {
  return createStore(reducers, middlewares);
}
