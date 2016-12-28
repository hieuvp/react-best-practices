// @flow
/**
 * Created by HieuVP on 12/28/16.
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

export default Radium(HomeContainer);
