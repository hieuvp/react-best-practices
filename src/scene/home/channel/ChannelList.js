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
import ChannelItem from './ChannelItem';

export default class ChannelList extends BaseComponent {

  props: {
    channels: Array<string>,
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Card style={{flexGrow: 1}}>
        <List>
          {this.props.channels.map((channel, index) => (
            <ChannelItem key={`channel-item-${index}`} channel={channel} />
          ))}
        </List>
      </Card>
    );
  }

}
