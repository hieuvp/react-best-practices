/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import type { User } from '../domain/user/User';

export const UPDATE_REHYDRATED: 'UPDATE_REHYDRATED' = 'UPDATE_REHYDRATED';
export const TERMINATE_DISPOSABLES: 'TERMINATE_DISPOSABLES' = 'TERMINATE_DISPOSABLES';
export const ADD_LOGGED_USER_LISTENER: 'ADD_LOGGED_USER_LISTENER' = 'ADD_LOGGED_USER_LISTENER';
export const SIGN_IN: 'SIGN_IN' = 'SIGN_IN';

export type Action = {type: typeof UPDATE_REHYDRATED, rehydrated: boolean}
  | {type: typeof TERMINATE_DISPOSABLES}
  | {type: typeof ADD_LOGGED_USER_LISTENER, user: ?User}
  | {type: typeof SIGN_IN}
  ;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | Promise<Action> | Array<Action>) => any;
export type GetState = () => Object;
