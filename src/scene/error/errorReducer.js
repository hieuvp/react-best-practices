/**
 * Created by HieuVP on 1/1/17.
 * @flow
 */
import type { Action } from '../../application/Action';

export type ErrorState = {};

const initialState: ErrorState = {};

export default function(state: ErrorState = initialState, action: Action): ErrorState {
  switch (action.type) {
    default:
      return state;
  }
}
