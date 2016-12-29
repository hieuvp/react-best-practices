/**
 * Created by HieuVP on 12/29/16.
 * @flow
 */
import React from 'react';
import {
  Card,
  List
} from 'material-ui';
import BaseComponent from '../../../application/BaseComponent';
import MessageItem from './MessageItem';
import type { Message } from '../../../domain/message/Message';

export default class MessageList extends BaseComponent {

  props: {
    messages: Array<Message>,
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Card style={{flexGrow: 2, marginLeft: 30}}>
        <List>
          {this.props.messages.map((message, index) => (
            <MessageItem key={`message-item-${index}`} message={message} />
          ))}
        </List>
      </Card>
    );
  }

}
