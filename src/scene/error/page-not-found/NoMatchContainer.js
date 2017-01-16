/**
 * Created by HieuVP on 1/7/17.
 * @flow
 */
import React from 'react';
import Helmet from 'react-helmet';
import Radium from 'radium';
import { connect } from 'react-redux';
import type { BaseProps } from '../../../application/BaseContainer';
import BaseContainer from '../../../application/BaseContainer';
import { Color } from '../../../constant';

class NoMatchContainer extends BaseContainer<BaseProps> {

  static get TAG_NAME() {
    return NoMatchContainer.name;
  }

  props: BaseProps;

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <Helmet title="404 Page Not Found" />
        <h2>Error</h2>
      </div>
    );
  }

}

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

function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps,
)(Radium(NoMatchContainer))
