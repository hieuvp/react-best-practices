/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import React from 'react';
import { Route } from 'react-router';
import BaseComponent from './BaseComponent';
import Application from './Application';
import HomeContainer from '../scene/home/HomeContainer';
import LoginContainer from '../scene/login/LoginContainer';

class Navigator extends BaseComponent {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Route path="/" component={Application}>
        <Route path="home" component={HomeContainer} />
        <Route path="login" component={LoginContainer} />
      </Route>
    );
  }

}

export default Navigator;
