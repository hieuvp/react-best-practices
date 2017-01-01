/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import LocalizableString from 'react-localization';
import Configuration from './Configuration';

const localizableString = new LocalizableString({
  [Configuration.language.english]: {...require('./String.en')},
  [Configuration.language.vietnamese]: {...require('./String.vi')},
});

export default localizableString;
