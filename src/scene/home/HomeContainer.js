/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BaseContainer from '../../application/BaseContainer';
import * as Action from './HomeAction';
import Color from '../../constant/Color';

type DefaultProps = {};
type Props = {};
type State = {};

class HomeContainer extends BaseContainer<DefaultProps, Props, State> {

  static get TAG_NAME() {
    return HomeContainer.name;
  }

  static defaultProps: DefaultProps;
  props: Props;
  state: State;

  constructor() {
    super();
  }

  render() {
    return (
      <div style={styles.container}>
        <h2>Welcome to HomeContainer</h2>
      </div>
    );
  }

}

HomeContainer.defaultProps = {};

const styles = {
  container: {
    display: 'flex',
    backgroundColor: Color.white,
  },
};

function mapStateToProps(state) {
  return {
    ...state[HomeContainer.TAG_NAME],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(Action, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Radium(HomeContainer))
