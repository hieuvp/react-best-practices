// @flow
/**
 * Created by HieuVP on 12/28/16.
 */
import type { Action } from '../../application/Action';

type State = {};

const initialState: State = {};

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}
