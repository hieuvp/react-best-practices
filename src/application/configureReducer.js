/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from '../domain/user/userReducer';
import { sceneReducers } from '../scene/Scene';

export default function configureReducer() {
  return combineReducers({
    routerReducer,
    userReducer,
    ...sceneReducers,
  });
}
