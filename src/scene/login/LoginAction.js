/**
 * Created by HieuVP on 12/30/16.
 * @flow
 */
import userService from '../../domain/user/UserService';

export function signIn() {
  userService.signInWithRedirect();
}

export type LoginAction = {
  signIn: typeof signIn,
};
