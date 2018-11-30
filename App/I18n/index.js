import RNLanguages from 'react-native-languages';
import I18n from 'i18n-js';

import en from './translations/en.json';
import th from './translations/th.json';
import zh from './translations/zh.json';

I18n.locale = RNLanguages.language;
I18n.fallbacks = true;
I18n.translations = { en, th, zh };

export default I18n;