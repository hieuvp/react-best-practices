/**
 * Created by HieuVP on 12/30/16.
 * @flow
 */
import React from 'react';
import {
  Card,
  CardText,
  RaisedButton
} from 'material-ui';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { BaseProps } from '../BaseContainer';
import BaseContainer from '../BaseContainer';
import Header from '../../view/Header';
import type { LoginAction } from './LoginAction';
import type { LoginState } from './loginReducer';
import {
  String,
  Style
} from '../../constant';

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

  onClick = () => {
  };

  render() {
    return (
      <div>
        <Header />
        <Card style={{...Style.base.container, ...styles.container}}>
          <CardText style={{textAlign: 'center'}}>
            {String.login.description}
          </CardText>
          <RaisedButton
            style={{display: 'block'}}
            primary
            label={String.login.label}
            onClick={this.onClick}
          />
        </Card>
      </div>
    );
  }

}

LoginContainer.defaultProps = {};

const styles = {
  container: {
    maxWidth: 800,
    margin: '30px auto',
    padding: 50,
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
