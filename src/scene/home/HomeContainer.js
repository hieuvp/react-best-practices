/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import React from 'react';
import Helmet from 'react-helmet';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { BaseProps } from '../../application/BaseContainer';
import BaseContainer from '../../application/BaseContainer';
import Header from '../../view/general/Header';
import ChannelList from './channel/ChannelList';
import MessageList from './message/MessageList';
import ChatBox from './general/ChatBox';
import type {
  State,
  Dispatch
} from '../../application/Action';
import type { HomeAction } from './HomeAction';
import type { HomeState } from './HomeReducer';
import { homeReducerName } from './HomeReducer';
import {
  Dimension,
  Style
} from '../../constant';

export type HomeProps = {
  action: HomeAction,
};

export const homePath = 'home';

class HomeContainer extends BaseContainer<BaseProps & HomeProps & HomeState> {

  static get TAG_NAME() {
    return HomeContainer.name;
  }

  static getCallingLocation() {
    return homePath;
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
  componentWillUnmount() {
    super.componentWillUnmount();
    this.props.action.terminateDisposables();
  }

  render() {
    return (
      <div>
        <Helmet title={this.props.document.title} />
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

const mapStateToProps = (state: State) => ({
  ...state[homeReducerName],
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  action: bindActionCreators({
    ...require('./HomeAction'),
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Radium(HomeContainer))
