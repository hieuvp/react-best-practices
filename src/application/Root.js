/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import {
  Router,
  Route
} from 'react-router';
import BaseComponent from './BaseComponent';
import Application from './Application';
import configureReducer from './configureReducer';
import configureStore from './configureStore';
import configureHistory from './configureHistory';

class Root extends BaseComponent {

  constructor(props: any) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    const reducers = configureReducer();
    const store = configureStore(reducers);
    const history = configureHistory(store);
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router history={history}>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }

}

export default Root;
