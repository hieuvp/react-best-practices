/**
 * Created by HieuVP on 12/29/16.
 * @flow
 */
import React from 'react';
import { AppBar } from 'material-ui';
import BaseComponent from '../application/BaseComponent';

export default class Header extends BaseComponent {

  constructor(props: any) {
    super(props);
  }

  render() {
    return <AppBar title="Awesome Chat App" />;
  }

}
