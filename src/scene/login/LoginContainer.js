/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import React from 'react';
import Helmet from 'react-helmet';
import {
  Card,
  CardText,
  RaisedButton
} from 'material-ui';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { BaseProps } from '../../application/BaseContainer';
import BaseContainer from '../../application/BaseContainer';
import Header from '../../view/Header';
import type { LoginAction } from './LoginAction';
import type { LoginState } from './loginReducer';
import { loginReducerName } from './loginReducer';
import {
  String,
  Style
} from '../../constant';

export type LoginProps = {
  action: LoginAction,
};

class LoginContainer extends BaseContainer<BaseProps & LoginProps & LoginState> {

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
  componentWillReceiveProps(nextProps: any) {
    super.componentWillReceiveProps(nextProps);
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
    this.props.action.signIn();
  };

  render() {
    return (
      <div>
        <Helmet title={this.props.document.title} />
        <Header />
        <Card style={{...Style.base.container, ...styles.container}}>
          <CardText style={{textAlign: 'center'}}>
            {String.login_description}
          </CardText>
          <RaisedButton
            style={{display: 'block'}}
            primary
            label={String.login_label}
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
    ...state[loginReducerName],
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
