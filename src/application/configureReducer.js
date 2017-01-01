/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from '../domain/user/userReducer';
import loginReducer from '../scene/login/loginReducer';
import homeReducer from '../scene/home/homeReducer';
import errorReducer from '../scene/error/errorReducer';

export default function configureReducer() {
  return combineReducers({
    routing: routerReducer,
    userReducer,
    loginReducer,
    homeReducer,
    errorReducer,
  });
}
