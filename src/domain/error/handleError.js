/**
 * Created by HieuVP on 1/3/17.
 * @flow
 */
import { browserHistory } from 'react-router';
import { routePath } from '../../application/Navigator';
import type {
  Dispatch,
  GetState
} from '../../application/Action';
import * as ActionType from '../../application/Action';
import InvalidTokenError from './InvalidTokenError';

type Parameter = {
  error: Error,
  dispatch: Dispatch,
  getState: GetState,
};

export default function handleError({error, dispatch, getState}: Parameter) {
  const currentRoutePath = browserHistory.getCurrentLocation().pathname;
  switch (error.name) {
    case InvalidTokenError.name:
      dispatch({
        type: ActionType.UPDATE_LOGGED_USER,
        user: undefined,
      });
      browserHistory.push(routePath.login.main);
      break;
    default:
      break;
  }
}
