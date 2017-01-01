/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';
import Helmet from 'react-helmet';
import BaseComponent from './BaseComponent';
import { String } from '../constant';

class Application extends BaseComponent {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet title={String.app.name} />
        {this.props.children}
      </div>
    );
  }

}

export default Application;
