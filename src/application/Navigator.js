/**
 * Created by HieuVP on 1/16/17.
 * @flow
 */
import { browserHistory } from 'react-router';
import type { Location } from './BaseContainer';
import LoginContainer from '../scene/login/LoginContainer';

export class Navigator {

  replaceUri(uri: string) {
    browserHistory.replace(uri);
  }

  replaceLogin(redirectLocation: Location) {
    const locationToLaunch = LoginContainer.getCallingLocation(redirectLocation);
    browserHistory.replace(locationToLaunch);
  }

}

export default new Navigator();
