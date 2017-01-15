/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import React from 'react';
import {
  Route,
  IndexRedirect
} from 'react-router';
import Application from './Application';
import LoginContainer from '../scene/login/LoginContainer';
import HomeContainer from '../scene/home/HomeContainer';
import NoMatchContainer from '../scene/error/page-not-found/NoMatchContainer';
import type { UserState } from '../domain/user/UserReducer';
import { userReducerName } from '../domain/user/UserReducer';

export const routePath = {
  root: '/',
  login: {
    main: 'login',
  },
  home: 'home',
};

const requireLogin = ({store, replaceState, callback}) => {
  const userState: UserState = store.getState()[userReducerName];
  if (!userState.loggedUser) {
    replaceState(routePath.login.main);
  }
  callback();
};

export default (store: any) => (
  <Route path={routePath.root} component={Application}>
    <IndexRedirect to={routePath.home} />

    <Route onEnter={(nextState, replaceState, callback) => requireLogin({store, replaceState, callback})}>
      <Route path={routePath.home} component={HomeContainer} />
    </Route>

    <Route path={routePath.login.main} component={LoginContainer} />

    <Route path="*" component={NoMatchContainer} />
  </Route>
);
