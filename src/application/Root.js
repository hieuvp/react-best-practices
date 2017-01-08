/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import BaseComponent from './BaseComponent';
import Navigator from './Navigator';
import DevTools from './DevTools';
import * as Action from './ApplicationAction';
import configureReducer, { whitelistReducers } from './configureReducer';
import configureStore from './configureStore';
import configureHistory from './configureHistory';
import { Configuration } from '../constant';

class Root extends BaseComponent {
  store: any;
  history: any;

  constructor(props: any) {
    super(props);
    injectTapEventPlugin();
  }

  /**
   * @override
   */
  componentWillMount() {
    super.componentWillMount();
    const reducers = configureReducer();
    this.store = configureStore({
      reducers,
      whitelist: whitelistReducers,
      onComplete: () => this.store.dispatch(Action.updateRehydrated(true)),
    });
    this.history = configureHistory(this.store);
  }

  render() {
    return (
      <Provider store={this.store}>
        <MuiThemeProvider>
          <div>
            <Router history={this.history}>
              {Navigator}
            </Router>
            {Configuration.isDebuggable && <DevTools />}
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }

}

export default Root;
