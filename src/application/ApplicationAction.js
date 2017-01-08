/**
 * Created by HieuVP on 1/4/17.
 * @flow
 */
import { Disposable } from 'rx';
import type {
  Action,
  ThunkAction
} from './Action';
import * as ActionType from './Action';
import handleError from '../domain/error/handleError';
import type { User } from '../domain/user/User';
import userService from '../domain/user/UserService';

const disposables: [Disposable] = [];

export function updateRehydrated(rehydrated: boolean): Action {
  return {
    type: ActionType.UPDATE_REHYDRATED,
    rehydrated,
  };
}

export function addLoggedUserListener(): ThunkAction {
  return (dispatch) => {
    disposables.push(userService.loggedUser.subscribe({
      onNext: (user: ?User) => {
        dispatch({
          type: ActionType.ADD_LOGGED_USER_LISTENER,
          user,
        });
      },
      onError: handleError,
    }));
  };
}

export function terminateDisposables(): Action {
  disposables.forEach(disposable => disposable.dispose());
  return {
    type: ActionType.TERMINATE_DISPOSABLES,
  };
}

export type ApplicationAction = {
  updateRehydrated: typeof updateRehydrated,
  addLoggedUserListener: typeof addLoggedUserListener,
  terminateDisposables: typeof terminateDisposables,
};
