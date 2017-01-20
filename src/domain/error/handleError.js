/**
 * Created by HieuVP on 1/3/17.
 * @flow
 */
import type {
  Dispatch,
  GetState
} from '../../application/Action';
import * as ActionType from '../../application/Action';
import type { Location } from '../../application/Route';
import navigator from '../../application/Navigator';
import InvalidTokenError from './InvalidTokenError';

type Parameter = {
  error: Error,
  dispatch: Dispatch,
  getState: GetState,
};

export default function handleError({error, dispatch, getState}: Parameter) {
  switch (error.name) {
    case InvalidTokenError.name: {
      dispatch({
        type: ActionType.UPDATE_LOGGED_USER,
        user: undefined,
      });
      const redirectLocation: Location = getState().routing.locationBeforeTransitions;
      navigator.replaceLogin(redirectLocation);
      break;
    }
    default:
      break;
  }
}
