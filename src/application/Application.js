/**
 * Created by HieuVP on 1/7/17.
 * @flow
 */
import React from 'react';
import Helmet from 'react-helmet';
import { CircularProgress } from 'material-ui';
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

  static get TAG_NAME() {
    return Application.name;
  }

  props: (BaseProps & ApplicationProps & ApplicationState);

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
    this.props.action.terminateDisposables();
  }

  renderLoader = () => {
    return (
      <div style={styles.container}>
        <CircularProgress size={60} thickness={6} />
      </div>
    );
  };

  render() {
    return (
      <div>
        <Helmet title={this.props.document.title} />
        {(() => (
          this.props.rehydrated ? this.props.children : this.renderLoader()
        ))()}
      </div>
    );
  }

}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
};

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
