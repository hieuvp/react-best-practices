/**
 * Created by HieuVP on 1/3/17.
 * @flow
 */
import { browserHistory } from 'react-router';
import type {
  Dispatch,
  GetState
} from '../../application/Action';
import * as ActionType from '../../application/Action';
import LoginContainer from '../../scene/login/LoginContainer';
import InvalidTokenError from './InvalidTokenError';

type Parameter = {
  error: Error,
  dispatch: Dispatch,
  getState: GetState,
};

export default function handleError({error, dispatch, getState}: Parameter) {
  switch (error.name) {
    case InvalidTokenError.name:
      dispatch({
        type: ActionType.UPDATE_LOGGED_USER,
        user: undefined,
      });
      browserHistory.replace(LoginContainer.ROUTE_PATH);
      break;
    default:
      break;
  }
}
