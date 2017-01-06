/**
 * Created by HieuVP on 1/7/17.
 * @flow
 */

export default class InvalidTokenError extends Error {

  constructor(message: string) {
    super(message);
    this.name = InvalidTokenError.name;
  }

}
