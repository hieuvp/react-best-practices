/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */

export type Action = {type: typeof undefined}
  ;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | Promise<Action> | Array<Action>) => any;
export type GetState = () => Object;
