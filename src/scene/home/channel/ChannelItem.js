/**
 * Created by HieuVP on 12/29/16.
 * @flow
 */
import React from 'react';
import { ListItem } from 'material-ui';
import BaseComponent from '../../../application/BaseComponent';

export default class ChannelItem extends BaseComponent {

  static get TAG_NAME() {
    return ChannelItem.name;
  }

  props: {
    channel: string,
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    return <ListItem>{this.props.channel}</ListItem>;
  }

}
