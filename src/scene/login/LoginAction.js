/**
 * Created by HieuVP on 12/30/16.
 * @flow
 */
import type { Action } from '../../application/Action';
import * as ActionType from '../../application/Action';
import userService from '../../domain/user/UserService';

export function signIn(): Action {
  userService.signInWithRedirect();
  return {
    type: ActionType.SIGN_IN,
  };
}

export type LoginAction = {
  signIn: typeof signIn,
};
