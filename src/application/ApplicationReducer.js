/**
 * Created by HieuVP on 1/7/17.
 * @flow
 */
import type { Action } from './Action';
import { String } from '../constant';

export const applicationReducerName = 'application';

export type ApplicationState = {
  document: {
    title: string,
  },
};

const initialState: ApplicationState = {
  document: {
    title: String.app_name,
  },
};

export default function(state: ApplicationState = initialState, action: Action): ApplicationState {
  switch (action.type) {
    default:
      return state;
  }
}
