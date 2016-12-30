/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import BaseComponent from '../application/BaseComponent';

class BaseContainer<Props> extends BaseComponent<Props> {

  constructor(props: any) {
    super(props);
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
