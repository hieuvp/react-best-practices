/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */

export const ADD_LOGGED_USER_LISTENER: 'ADD_LOGGED_USER_LISTENER' = 'ADD_LOGGED_USER_LISTENER';

export const SIGN_IN: 'SIGN_IN' = 'SIGN_IN';

export type Action = {type: typeof undefined}
  | {type: typeof ADD_LOGGED_USER_LISTENER}
  | {type: typeof SIGN_IN}
  ;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | Promise<Action> | Array<Action>) => any;
export type GetState = () => Object;
