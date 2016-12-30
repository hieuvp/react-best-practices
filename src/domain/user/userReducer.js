/**
 * Created by HieuVP on 12/31/16.
 * @flow
 */
import type { Action } from '../../application/Action';
import type { User } from './User';

export type UserState = {
  loggedUser?: User,
};

const initialState: UserState = {
  loggedUser: undefined,
};

export default function(state: UserState = initialState, action: Action): UserState {
  switch (action.type) {
    default:
      return state;
  }
}
