/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import BaseComponent from './BaseComponent';

export type Location = {
  pathname: string,
  query: any,
  search: string,
  hash: string,
};

type Router = {
  push: (string) => void,
  replace: (string) => void,
  go: (number) => void,
  goBack: () => void,
  goForward: () => void,
  setRouteLeaveHook: Function,
  isActive: Function,
};

export type BaseProps = {
  children: any,
  location: Location,
  params: any,
  route: any,
  routeParams: any,
  router: Router,
  routes: Array<any>,
};

class BaseContainer<Props> extends BaseComponent<Props> {

  static getUriFromLocation(location: Location): string {
    return `${location.pathname}${location.search}${location.hash}`;
  }

  constructor(props: any) {
    super(props);
  }

  /**
   * @override
   */
  componentWillMount() {
    super.componentWillMount();
  }

  /**
   * @override
   */
  componentDidMount() {
    super.componentDidMount();
  }

  /**
   * @override
   */
  componentWillReceiveProps(nextProps: any) {
    super.componentWillReceiveProps(nextProps);
  }

  /**
   * @override
   */
  componentDidUpdate() {
    super.componentDidUpdate();
  }

  /**
   * @override
   */
  componentWillUnmount() {
    super.componentWillUnmount();
  }

}

export default BaseContainer;
