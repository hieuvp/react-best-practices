/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import React from 'react';
import { Route } from 'react-router';
import Application from './Application';
import HomeContainer from '../scene/home/HomeContainer';
import LoginContainer from '../scene/login/LoginContainer';
import ErrorContainer from '../scene/error/ErrorContainer';

const Navigator = (
  <Route path="/" component={Application}>
    <Route path="home" component={HomeContainer} />
    <Route path="login" component={LoginContainer} />
    <Route path="*" component={ErrorContainer} />
  </Route>
);

export default Navigator;
