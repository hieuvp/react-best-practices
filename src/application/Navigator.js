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

export function makeUrl(location: Location) {
  return `${location.pathname}${location.search}${location.hash}`;
}

const requireLogin = ({store, replaceState, callback}) => {
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

export default (store: any) => (
  <Route path={Application.ROUTE_PATH} component={Application}>
    <IndexRedirect to={HomeContainer.ROUTE_PATH} />

    <Route onEnter={(nextState, replaceState, callback) => requireLogin({store, replaceState, callback})}>
      <Route path={HomeContainer.ROUTE_PATH} component={HomeContainer} />
    </Route>

    <Route path={LoginContainer.ROUTE_PATH} component={LoginContainer} />

    <Route path={NoMatchContainer.ROUTE_PATH} component={NoMatchContainer} />
  </Route>
);
