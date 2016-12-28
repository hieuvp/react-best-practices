// @flow
/**
 * Created by HieuVP on 12/28/16.
 */
import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';

export default class Root extends Component {

  constructor() {
    super();
    injectTapEventPlugin();
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  }

}
