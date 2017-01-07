/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import type { Action } from '../../application/Action';

export const loginReducerName = 'loginContainer';

export type LoginState = {
  document: {
    title: string,
  },
};

const initialState: LoginState = {
  document: {
    title: 'Login',
  },
};

export default function(state: LoginState = initialState, action: Action): LoginState {
  switch (action.type) {
    default:
      return state;
  }
}
