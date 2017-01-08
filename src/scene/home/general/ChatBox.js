/**
 * Created by HieuVP on 12/29/16.
 * @flow
 */
import React from 'react';
import { Card } from 'material-ui';
import { FormControl } from 'react-bootstrap';
import BaseComponent from '../../../application/BaseComponent';

export default class ChatBox extends BaseComponent {

  state: {
    text: string,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChange = (eventHandler: *) => {
    this.setState({text: eventHandler.target.value});
  };

  onKeyUp = (eventHandler: *) => {
    if (eventHandler.keyCode !== 13) return;
    const text = eventHandler.target.value;
    if (text.trim() !== '') {
      eventHandler.preventDefault();
    }
    this.setState({text: ''});
  };

  render() {
    return (
      <Card style={styles.container}>
        <FormControl
          style={styles.textArea}
          componentClass="textarea"
          value={this.state.text}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
        />
      </Card>
    );
  }

}

const styles = {
  container: {
    margin: '30px auto 30px',
    padding: 30,
  },
  textArea: {
    width: '100%',
    minHeight: 50,
    resize: 'none',
    borderColor: '#d0d0d0',
    borderRadius: 3,
    color: '#555',
    fontSize: 14,
  },
};
