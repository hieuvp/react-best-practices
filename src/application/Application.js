/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import BaseComponent from './BaseComponent';

class Application extends BaseComponent {

  constructor(props: any) {
    super(props);
  }

  render() {
    return this.props.children;
  }

}

export default Application;
