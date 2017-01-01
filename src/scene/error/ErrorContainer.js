/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import React from 'react';
import Helmet from 'react-helmet';
import Radium from 'radium';
import { connect } from 'react-redux';
import type { BaseProps } from '../BaseContainer';
import BaseContainer from '../BaseContainer';
import type { ErrorState } from './errorReducer';
import { errorReducerName } from './errorReducer';
import { Color } from '../../constant';

export type ErrorProps = {};

class ErrorContainer extends BaseContainer<*> {

  static get TAG_NAME() {
    return ErrorContainer.name;
  }

  static defaultProps: {};

  props: (BaseProps & ErrorProps & ErrorState);

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

  render() {
    return (
      <div style={styles.container}>
        <Helmet title={this.props.document.title} />
        <h2>Error</h2>
      </div>
    );
  }

}

ErrorContainer.defaultProps = {};

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
    ...state[errorReducerName],
  };
}

export default connect(
  mapStateToProps,
)(Radium(ErrorContainer))
