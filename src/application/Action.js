/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import type { User } from '../domain/user/User';

export const SIGN_IN: 'SIGN_IN' = 'SIGN_IN';
export const ADD_LOGGED_USER_LISTENER: 'ADD_LOGGED_USER_LISTENER' = 'ADD_LOGGED_USER_LISTENER';

export type Action = {type: typeof SIGN_IN}
  | {type: typeof ADD_LOGGED_USER_LISTENER, user: ?User}
  ;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | Promise<Action> | Array<Action>) => any;
export type GetState = () => Object;
