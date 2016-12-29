/**
 * Created by HieuVP on 12/29/16.
 * @flow
 */
import React from 'react';
import {
  ListItem,
  Avatar
} from 'material-ui';
import BaseComponent from '../../../application/BaseComponent';
import type { Message } from '../../../domain/message/Message';

export default class MessageItem extends BaseComponent {

  props: {
    message: Message,
  };

  constructor(props: any) {
    super(props);
  }

  renderAvatar = () => {
    return <Avatar src={this.props.message.photo} />;
  };

  render() {
    return <ListItem leftAvatar={this.renderAvatar()}>{this.props.message.text}</ListItem>;
  }

}
