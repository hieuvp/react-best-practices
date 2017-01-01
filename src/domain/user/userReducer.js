/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import type { Action } from '../../application/Action';
import type { User } from './User';

export const userReducerName = 'user';

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
