/**
 * Created by HieuVP on 1/4/17.
 * @flow
 */
import type { ThunkAction } from './Action';
import * as ActionType from './Action';
import handleError from './handleError';
import type { User } from '../domain/user/User';
import userService from '../domain/user/UserService';

export function addLoggedUserListener(): ThunkAction {
  return (dispatch) => {
    userService.loggedUser.subscribe({
      onNext: (user: ?User) => {
        dispatch({
          type: ActionType.ADD_LOGGED_USER_LISTENER,
          user,
        });
      },
      onError: handleError,
    });
  };
}

export type ApplicationAction = {
  addLoggedUserListener: typeof addLoggedUserListener,
};
