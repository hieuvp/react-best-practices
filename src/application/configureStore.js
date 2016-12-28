/**
 * Created by HieuVP on 12/28/16.
 */
import {
  applyMiddleware,
  createStore
} from 'redux';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(thunk);

export default function configureStore(reducers) {
  return createStore(reducers, middlewares);
}
