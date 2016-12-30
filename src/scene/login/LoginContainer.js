/**
 * Created by HieuVP on 12/30/16.
 * @flow
 */
import React from 'react';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { BaseProps } from '../BaseContainer';
import BaseContainer from '../BaseContainer';
import type { LoginAction } from './LoginAction';
import type { LoginState } from './loginReducer';
import { Color } from '../../constant';

export type LoginProps = {
  action: LoginAction,
};

class LoginContainer extends BaseContainer<*> {

  static get TAG_NAME() {
    return LoginContainer.name;
  }

  static defaultProps: {};

  props: (BaseProps & LoginProps & LoginState);

  state: {};

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  /**
   * @override
   */
  componentWillMount() {
    super.componentWillMount();
  }

  /**
   * @override
   */
  componentDidMount() {
    super.componentDidMount();
  }

  /**
   * @override
   */
  componentDidUpdate() {
    super.componentDidUpdate();
  }

  /**
   * @override
   */
  componentWillUnmount() {
    super.componentWillUnmount();
  }

  render() {
    return (
      <div style={styles.container}>
        <h3>Welcome to LoginContainer</h3>
      </div>
    );
  }

}

LoginContainer.defaultProps = {};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
};

function mapStateToProps(state) {
  return {
    ...state[LoginContainer.TAG_NAME],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators({
      ...require('./LoginAction'),
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Radium(LoginContainer))
