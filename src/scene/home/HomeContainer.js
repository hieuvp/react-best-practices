/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';
import Radium from 'radium';
import BaseContainer from '../../application/BaseContainer';

class HomeContainer extends BaseContainer {

  static get TAG_NAME() {
    return HomeContainer.name;
  }

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

const styles = {
  container: {},
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
