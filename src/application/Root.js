/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import App from './App';
import configureReducer from './configureReducer';
import configureStore from './configureStore';

export default class Root extends Component {

  constructor(props: any) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    const reducers = configureReducer();
    const store = configureStore(reducers);
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <App store={store} />
        </MuiThemeProvider>
      </Provider>
    );
  }

}
