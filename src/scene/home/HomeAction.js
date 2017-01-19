/**
 * Created by HieuVP on 1/8/17.
 * @flow
 */
import { Disposable } from 'rx';
import type { Action } from '../../application/Action';
import * as ActionType from '../../application/Action';

const disposables: Array<Disposable> = [];

export function terminateDisposables(): Action {
  disposables.forEach(disposable => disposable.dispose());
  disposables.splice(0, disposables.length);
  return {
    type: ActionType.TERMINATE_DISPOSABLES,
  };
}

export type HomeAction = {
  terminateDisposables: typeof terminateDisposables,
};
