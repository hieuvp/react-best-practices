/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BaseContainer from '../BaseContainer';
import Header from '../../view/Header';
import ChannelList from './channel/ChannelList';
import MessageList from './message/MessageList';
import ChatBox from './common/ChatBox';
import * as Action from './HomeAction';
import { Dimension } from '../../constant';

class HomeContainer extends BaseContainer<*> {

  static get TAG_NAME() {
    return HomeContainer.name;
  }

  static defaultProps: {};

  props: {};

  state: {};

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div style={styles.container}>
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
    width: '90%',
    margin: '30px auto 30px',
  },
  main: {
    display: 'flex',
    flexFlow: 'row wrap',
  }
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
