/**
 * Created by HieuVP on 1/15/17.
 * @flow
 */
import type { User } from '../../domain/user/User';

export function transformIntoUser(object: any): ?User {
  return !object ? undefined : {
      name: object.displayName,
      email: object.email,
      avatar: object.photoURL,
    };
}
