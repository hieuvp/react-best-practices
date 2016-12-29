/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';
import BaseComponent from './BaseComponent';
import HomeContainer from '../scene/home/HomeContainer';

class Application extends BaseComponent {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <HomeContainer />
    );
  }
}

export default Application;
