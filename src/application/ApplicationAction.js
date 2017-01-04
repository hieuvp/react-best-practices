/**
 * Created by HieuVP on 1/4/17.
 * @flow
 */
import type { ThunkAction } from './Action';
import * as ActionType from './Action';
import userService from '../domain/user/UserService';

export function addLoggedUserListener(): ThunkAction {
  return (dispatch) => {
    dispatch({
      type: ActionType.ADD_LOGGED_USER_LISTENER,
    });
  };
}

export type ApplicationAction = {
  addLoggedUserListener: typeof addLoggedUserListener,
};
