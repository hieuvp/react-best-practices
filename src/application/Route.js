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
import { store } from './configureStore';
import Application from './Application';
import LoginContainer, { loginRoutePath } from '../scene/login/LoginContainer';
import HomeContainer, { homeRoutePath } from '../scene/home/HomeContainer';
import NoMatchContainer from '../scene/error/page-not-found/NoMatchContainer';
import type { UserState } from '../domain/user/UserReducer';
import { userReducerName } from '../domain/user/UserReducer';

export function makeUrl(location: Location) {
  return `${location.pathname}${location.search}${location.hash}`;
}

const requireLogin = ({replaceState, callback}) => {
  const state = store.getState();
  const userState: UserState = state[userReducerName];
  if (!userState.loggedUser) {
    const location: Location = state.routing.locationBeforeTransitions;
    const pathname = LoginContainer.ROUTE_PATH;
    const query = {
      [LoginContainer.QUERY_PARAM.redirectUrl]: makeUrl(location),
    };
    replaceState({pathname, query});
  }
  callback();
};

export default (
  <Route path="/" component={Application}>
    <IndexRedirect to={homeRoutePath} />

    <Route onEnter={(nextState, replaceState, callback) => requireLogin({replaceState, callback})}>
      <Route path={homeRoutePath} component={HomeContainer} />
    </Route>

    <Route path={loginRoutePath} component={LoginContainer} />

    <Route path="*" component={NoMatchContainer} />
  </Route>
);
