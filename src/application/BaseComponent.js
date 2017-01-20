/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';
import navigator, { Navigator } from './Navigator';

class BaseComponent<Props> extends React.Component<*, Props, *> {

  static get navigator(): Navigator {
    return navigator;
  }

  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps: any) {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

}

export default BaseComponent;
