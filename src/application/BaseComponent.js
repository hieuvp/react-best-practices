/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';
import navigator, { Navigator } from './Navigator';

class BaseComponent<Props> extends React.Component<*, Props, *> {

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

  get navigator(): Navigator {
    return navigator;
  }

}

export default BaseComponent;
