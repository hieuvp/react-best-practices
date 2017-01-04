/**
 * Created by HieuVP on 1/4/17.
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
import { String } from '../constant';

export type ApplicationProps = {
  action: ApplicationAction,
};

class Application extends BaseContainer<BaseProps & ApplicationProps> {

  static get TAG_NAME() {
    return Application.name;
  }

  props: (BaseProps & ApplicationProps);

  constructor(props: any) {
    super(props);
  }

  /**
   * @override
   */
  componentWillMount() {
    super.componentWillMount();
    this.props.action.addLoggedUserListener();
  }

  /**
   * @override
   */
  componentWillUnmount() {
    super.componentWillUnmount();
  }

  render() {
    return (
      <div>
        <Helmet title={String.app_name} />
        {this.props.children}
      </div>
    );
  }

}

function mapStateToProps() {
  return {};
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
