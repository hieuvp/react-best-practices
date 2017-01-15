/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import React from 'react';
import {
  Route,
  IndexRedirect
} from 'react-router';
import type { Location } from './BaseContainer';
import Application from './Application';
import LoginContainer from '../scene/login/LoginContainer';
import HomeContainer from '../scene/home/HomeContainer';
import NoMatchContainer from '../scene/error/page-not-found/NoMatchContainer';
import type { UserState } from '../domain/user/UserReducer';
import { userReducerName } from '../domain/user/UserReducer';

export const routePath = {
  root: '/',
  login: 'login',
  home: 'home',
};

export function getCurrentLocation(location: Location) {
  return `${location.pathname}${location.search}${location.hash}`;
}

const requireLogin = ({store, replaceState, callback}) => {
  const state = store.getState();
  const userState: UserState = state[userReducerName];
  if (!userState.loggedUser) {
    const location: Location = state.routing.locationBeforeTransitions;
    replaceState(routePath.login);
  }
  callback();
};

export default (store: any) => (
  <Route path={routePath.root} component={Application}>
    <IndexRedirect to={routePath.home} />

    <Route onEnter={(nextState, replaceState, callback) => requireLogin({store, replaceState, callback})}>
      <Route path={routePath.home} component={HomeContainer} />
    </Route>

    <Route path={routePath.login} component={LoginContainer} />

    <Route path="*" component={NoMatchContainer} />
  </Route>
);
