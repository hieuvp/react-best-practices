/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';

class BaseComponent<Props> extends React.Component<*, Props, *> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

}

export default BaseComponent;
