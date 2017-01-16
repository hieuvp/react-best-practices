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
import ChannelItem from './ChannelItem';
import type { BaseProps } from '../../../application/BaseContainer';
import type { HomeProps } from '../HomeContainer';
import type { HomeState } from '../HomeReducer';

export default class ChannelList extends BaseComponent<BaseProps & HomeProps & HomeState> {

  static get TAG_NAME() {
    return ChannelList.name;
  }

  props: (BaseProps & HomeProps & HomeState);

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
