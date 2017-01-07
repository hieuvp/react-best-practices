/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import React from 'react';
import { Route } from 'react-router';
import Application from './Application';
import LoginContainer from '../scene/login/LoginContainer';
import HomeContainer from '../scene/home/HomeContainer';
import NoMatchContainer from '../scene/error/page-not-found/NoMatchContainer';

export default (
  <Route path="/" component={Application}>
    <Route path="login" component={LoginContainer} />
    <Route path="home" component={HomeContainer} />
    <Route path="*" component={NoMatchContainer} />
  </Route>
);
