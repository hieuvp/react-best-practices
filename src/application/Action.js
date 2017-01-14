/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import type { User } from '../domain/user/User';

export const TERMINATE_DISPOSABLES: 'TERMINATE_DISPOSABLES' = 'TERMINATE_DISPOSABLES';
export const UPDATE_LOGGED_USER: 'UPDATE_LOGGED_USER' = 'UPDATE_LOGGED_USER';
export const SIGN_IN: 'SIGN_IN' = 'SIGN_IN';

export type Action = {type: typeof TERMINATE_DISPOSABLES}
  | {type: typeof UPDATE_LOGGED_USER, user: ?User}
  | {type: typeof SIGN_IN}
  ;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | Promise<Action> | Array<Action>) => any;
export type GetState = () => Object;
