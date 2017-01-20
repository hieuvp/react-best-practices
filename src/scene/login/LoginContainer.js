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
import type { Location } from '../../application/Route';
import type { State } from '../../application/Action';
import Header from '../../view/general/Header';
import type { LoginAction } from './LoginAction';
import type { LoginState } from './LoginReducer';
import { loginReducerName } from './LoginReducer';
import {
  String,
  Style
} from '../../constant';

export type LoginProps = {
  action: LoginAction,
};

export const loginPath = 'login';

const queryParams = {
  redirectUri: 'redirectUri',
};

class LoginContainer extends BaseContainer<BaseProps & LoginProps & LoginState> {

  static get TAG_NAME() {
    return LoginContainer.name;
  }

  static getCallingLocation(redirectLocation: Location) {
    const pathname = loginPath;
    const query = {
      [queryParams.redirectUri]: super.getUriFromLocation(redirectLocation),
    };
    return {pathname, query};
  }

  props: (BaseProps & LoginProps & LoginState);

  constructor(props: any) {
    super(props);
  }

  /**
   * @override
   */
  componentWillUnmount() {
    super.componentWillUnmount();
    this.props.action.terminateDisposables();
  }

  onClick = () => {
    this.props.action.signIn(() => {
      const redirectUri = this.props.location.query[queryParams.redirectUri];
      this.navigator.replaceUri(redirectUri || '/');
    });
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

const styles = {
  container: {
    maxWidth: 800,
    margin: '30px auto',
    padding: 50,
  },
};

const mapStateToProps = (state: State) => ({
  ...state[loginReducerName],
});

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators({
    ...require('./LoginAction'),
  }, dispatch),
});

// $FlowFixMe
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Radium(LoginContainer));
