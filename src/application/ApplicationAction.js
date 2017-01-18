/**
 * Created by HieuVP on 1/4/17.
 * @flow
 */
import { Disposable } from 'rx';
import type {
  Dispatch,
  GetState,
  Action,
  ThunkAction
} from './Action';
import * as ActionType from './Action';
import handleError from '../domain/error/handleError';
import type { User } from '../domain/user/User';
import userService from '../domain/user/UserService';

const disposables: [Disposable] = [];

export function addLoggedUserListener(): ThunkAction {
  return (dispatch: Dispatch, getState: GetState) => {
    disposables.push(userService.loggedUser.subscribe({
      onNext: (user: ?User) => {
        dispatch({
          type: ActionType.UPDATE_LOGGED_USER,
          user,
        });
      },
      onError: error => handleError({error, dispatch, getState}),
    }));
  };
}

export function terminateDisposables(): Action {
  disposables.forEach(disposable => disposable.dispose());
  disposables.splice(0, disposables.length);
  return {
    type: ActionType.TERMINATE_DISPOSABLES,
  };
}

export type ApplicationAction = {
  addLoggedUserListener: typeof addLoggedUserListener,
  terminateDisposables: typeof terminateDisposables,
};
