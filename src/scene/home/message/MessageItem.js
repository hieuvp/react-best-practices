/**
 * Created by HieuVP on 1/8/17.
 * @flow
 */
import React from 'react';
import {
  ListItem,
  Avatar
} from 'material-ui';
import BaseComponent from '../../../application/BaseComponent';
import type { Message } from '../../../domain/chat/Message';

export default class MessageItem extends BaseComponent {

  /**
   * @return {string}
   */
  static get TAG_NAME() {
    return MessageItem.name;
  }

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
    return (
      <ListItem leftAvatar={this.renderAvatar()}>
        {this.props.message.text}
      </ListItem>
    );
  }

}
