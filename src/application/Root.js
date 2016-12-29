/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import BaseComponent from './BaseComponent';
import Application from './Application';
import configureReducer from './configureReducer';
import configureStore from './configureStore';

class Root extends BaseComponent {

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
          <Application store={store} />
        </MuiThemeProvider>
      </Provider>
    );
  }

}

export default Root;
