/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BaseContainer from '../../application/BaseContainer';
import Header from '../../widget/Header';
import ChannelList from './channel/ChannelList';
import MessageList from './message/MessageList';
import ChatBox from './component/ChatBox';
import * as Action from './HomeAction';

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
          <ChannelList {...this.props} />
          <MessageList {...this.props} />
        </div>
        <ChatBox />
      </div>
    );
  }

}

HomeContainer.defaultProps = {};

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '90%',
    maxWidth: 1200,
    margin: '30px auto 30px',
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
