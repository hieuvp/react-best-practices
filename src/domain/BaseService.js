/**
 * Created by HieuVP on 12/29/16.
 * @flow
 */
import Rx from 'rx';
import bundleError from './error/bundleError';

export default class BaseService {

  constructor() {
  }

  bundleError(error: Error): Rx.Observable<any> {
    return Rx.Observable.throw(bundleError(error));
  }

}
