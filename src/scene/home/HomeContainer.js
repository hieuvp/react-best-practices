/**
 * Created by HieuVP on 12/30/16.
 * @flow
 */
import React from 'react';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { BaseProps } from '../BaseContainer';
import BaseContainer from '../BaseContainer';
import Header from '../../view/Header';
import ChannelList from './channel/ChannelList';
import MessageList from './message/MessageList';
import ChatBox from './common/ChatBox';
import type { HomeAction } from './HomeAction';
import type { HomeState } from './homeReducer';
import {
  Dimension,
  Style
} from '../../constant';

export type HomeProps = {
  action: HomeAction,
};

class HomeContainer extends BaseContainer<*> {

  static get TAG_NAME() {
    return HomeContainer.name;
  }

  static defaultProps: {};

  props: (BaseProps & HomeProps & HomeState);

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
      <div>
        <Header />
        <div style={[Style.base.container, styles.container]}>
          <div style={styles.main}>
            <ChannelList {...this.props} />
            <MessageList {...this.props} />
          </div>
          <ChatBox />
        </div>
      </div>
    );
  }

}

HomeContainer.defaultProps = {};

const styles = {
  container: {
    maxWidth: Dimension.window.maxWidth,
    margin: '30px auto 30px',
  },
  main: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
};

function mapStateToProps(state) {
  return {
    ...state[HomeContainer.TAG_NAME],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators({
      ...require('./HomeAction'),
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Radium(HomeContainer))
