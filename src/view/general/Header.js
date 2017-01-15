/**
 * Created by HieuVP on 1/10/17.
 * @flow
 */
import React from 'react';
import { AppBar } from 'material-ui';
import BaseView from '../BaseView';
import { String } from '../../constant';

export default class Header extends BaseView {

  /**
   * @return {string}
   */
  static get TAG_NAME() {
    return Header.name;
  }

  constructor(props: any) {
    super(props);
  }

  render() {
    return <AppBar title={String.header_title} />;
  }

}
