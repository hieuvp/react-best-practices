/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import BaseComponent from './BaseComponent';

export type BaseProps = {
  children: any,
  location: any,
  params: any,
  route: any,
  routeParams: any,
  router: any,
  routes: Array<any>,
};

class BaseContainer<Props> extends BaseComponent<Props> {

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
