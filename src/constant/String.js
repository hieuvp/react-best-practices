/**
 * Created by HieuVP on 12/28/16.
 * @flow
 */
import LocalizableString from 'react-localization';
import Configuration from './Configuration';
import English from './String.en';
import Vietnamese from './String.vi';

const language = Configuration.language;

export default new LocalizableString({
  [language.english]: {...English},
  [language.vietnamese]: {...Vietnamese},
});
