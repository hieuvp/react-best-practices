/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import UserReducer, { userReducerName } from '../domain/user/UserReducer';
import LoginReducer, { loginReducerName } from '../scene/login/LoginReducer';
import HomeReducer, { homeReducerName } from '../scene/home/HomeReducer';
import ErrorReducer, { errorReducerName } from '../scene/error/ErrorReducer';

export const whitelistReducers = [
  userReducerName,
];

export default function configureReducer() {
  return combineReducers({
    routing: routerReducer,
    [userReducerName]: UserReducer,
    [loginReducerName]: LoginReducer,
    [homeReducerName]: HomeReducer,
    [errorReducerName]: ErrorReducer,
  });
}
