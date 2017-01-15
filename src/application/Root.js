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
import Route from './Route';
import DevTools from './DevTools';
import configureReducer, { whitelistReducers } from './configureReducer';
import configureStore from './configureStore';
import configureHistory from './configureHistory';
import { Configuration } from '../constant';

class Root extends BaseComponent {

  state: {
    store: any,
    history: any,
    rehydrated: boolean,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      store: undefined,
      history: undefined,
      rehydrated: false,
    };
    injectTapEventPlugin();
  }

  /**
   * @override
   */
  componentWillMount() {
    super.componentWillMount();
    const reducers = configureReducer();
    const store = configureStore({
      reducers,
      whitelist: whitelistReducers,
      onComplete: () => this.setState({rehydrated: true}),
    });
    const history = configureHistory(store);
    this.setState({store, history});
  }

  render() {
    return !this.state.rehydrated ? <div /> : (
        <Provider store={this.state.store}>
          <MuiThemeProvider>
            <div>
              <Router history={this.state.history}>
                {Route(this.state.store)}
              </Router>
              {Configuration.isDebuggable && <DevTools />}
            </div>
          </MuiThemeProvider>
        </Provider>
      );
  }

}

export default Root;
