/** @format */

import {AppRegistry} from 'react-native';
import App from './App/Containers/App';
import {name as appName} from './app.json';
import Config from 'react-native-config'
import StorybookUI from './storybook';

if(Config.ENABLE_STORYBOOK == 1) {
  AppRegistry.registerComponent(appName, () => StorybookUI);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
