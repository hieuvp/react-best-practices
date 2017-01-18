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
import configureReducer, { whitelistReducers } from './configureReducer';
import configureStore, { store } from './configureStore';
import configureHistory, { history } from './configureHistory';
import Route from './Route';
import DevTools from './DevTools';
import { Configuration } from '../constant';

class Root extends React.Component {

  state: {
    rehydrated: boolean,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      rehydrated: false,
    };
    injectTapEventPlugin();
  }

  componentWillMount() {
    const reducers = configureReducer();
    const store = configureStore({
      reducers,
      whitelist: whitelistReducers,
      onComplete: () => this.setState({rehydrated: true}),
    });
    configureHistory(store);
  }

  render() {
    return !this.state.rehydrated ? <div /> : (
        <Provider store={store}>
          <MuiThemeProvider>
            <div>
              <Router history={history}>
                {Route}
              </Router>
              {Configuration.isDebuggable && <DevTools />}
            </div>
          </MuiThemeProvider>
        </Provider>
      );
  }

}

export default Root;
