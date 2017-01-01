/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer, { userReducerName } from '../domain/user/userReducer';
import loginReducer, { loginReducerName } from '../scene/login/loginReducer';
import homeReducer, { homeReducerName } from '../scene/home/homeReducer';
import errorReducer, { errorReducerName } from '../scene/error/errorReducer';

export default function configureReducer() {
  return combineReducers({
    routing: routerReducer,
    [userReducerName]: userReducer,
    [loginReducerName]: loginReducer,
    [homeReducerName]: homeReducer,
    [errorReducerName]: errorReducer,
  });
}
