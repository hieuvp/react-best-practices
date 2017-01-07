/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import UserReducer, { userReducerName } from '../domain/user/UserReducer';
import ApplicationReducer, { applicationReducerName } from './ApplicationReducer';
import LoginReducer, { loginReducerName } from '../scene/login/LoginReducer';
import HomeReducer, { homeReducerName } from '../scene/home/HomeReducer';

export const whitelistReducers = [
  userReducerName,
];

export default function configureReducer() {
  return combineReducers({
    routing: routerReducer,
    [userReducerName]: UserReducer,
    [applicationReducerName]: ApplicationReducer,
    [loginReducerName]: LoginReducer,
    [homeReducerName]: HomeReducer,
  });
}
