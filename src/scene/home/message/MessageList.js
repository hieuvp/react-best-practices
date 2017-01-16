/**
 * Created by HieuVP on 1/8/17.
 * @flow
 */
import React from 'react';
import {
  Card,
  List
} from 'material-ui';
import BaseComponent from '../../../application/BaseComponent';
import MessageItem from './MessageItem';
import type { BaseProps } from '../../../application/BaseContainer';
import type { HomeProps } from '../HomeContainer';
import type { HomeState } from '../HomeReducer';

export default class MessageList extends BaseComponent<BaseProps & HomeProps & HomeState> {

  static get TAG_NAME() {
    return MessageList.name;
  }

  props: (BaseProps & HomeProps & HomeState);

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
