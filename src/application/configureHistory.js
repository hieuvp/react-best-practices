/**
 * Created by HieuVP on 12/28/16.
 */
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

export let history;

export default function configureHistory(store) {
  history = syncHistoryWithStore(browserHistory, store);
  return history;
}
