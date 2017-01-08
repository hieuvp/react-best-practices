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

export const routePath = {
  login: 'login',
  home: 'home',
};

export default (
  <Route path="/" component={Application}>
    <IndexRedirect to={routePath.home} />
    <Route path={routePath.login} component={LoginContainer} />
    <Route path={routePath.home} component={HomeContainer} />
    <Route path="*" component={NoMatchContainer} />
  </Route>
);
