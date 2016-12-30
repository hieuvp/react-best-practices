/**
 * Created by HieuVP on 12/30/16.
 * @flow
 */
import type { Action } from '../Action';

export type LoginState = {};

const initialState: LoginState = {};

export default function(state: LoginState = initialState, action: Action): LoginState {
  switch (action.type) {
    default:
      return state;
  }
}
