/**
 * Created by HieuVP on 1/7/17.
 * @flow
 */
import React from 'react';
import Helmet from 'react-helmet';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { BaseProps } from './BaseContainer';
import BaseContainer from './BaseContainer';
import type { ApplicationAction } from './ApplicationAction';
import type { ApplicationState } from './ApplicationReducer';
import { applicationReducerName } from './ApplicationReducer';

export type ApplicationProps = {
  action: ApplicationAction,
};

class Application extends BaseContainer<BaseProps & ApplicationProps & ApplicationState> {

  props: (BaseProps & ApplicationProps & ApplicationState);

  constructor(props: any) {
    super(props);
  }

  /**
   * @override
   */
  componentWillReceiveProps(nextProps: any) {
    super.componentWillReceiveProps(nextProps);
    if (nextProps.rehydrated) {
      this.props.action.terminateDisposables();
      this.props.action.addLoggedUserListener();
    }
  }

  /**
   * @override
   */
  componentWillUnmount() {
    super.componentWillUnmount();
    this.props.action.terminateDisposables();
  }

  render() {
    return (
      <div>
        <Helmet title={this.props.document.title} />
        {this.props.rehydrated && this.props.children}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    ...state[applicationReducerName],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators({
      ...require('./ApplicationAction'),
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Radium(Application))
