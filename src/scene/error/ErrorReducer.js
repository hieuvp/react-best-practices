/**
 * Created by HieuVP on 1/7/17.
 * @flow
 */
import type { Action } from '../../application/Action';

export const errorReducerName = 'errorContainer';

export type ErrorState = {
  document: {
    title: string,
  },
};

const initialState: ErrorState = {
  document: {
    title: 'Error',
  },
};

export default function(state: ErrorState = initialState, action: Action): ErrorState {
  switch (action.type) {
    default:
      return state;
  }
}
