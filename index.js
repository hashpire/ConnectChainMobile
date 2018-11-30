/** @format */

import {AppRegistry} from 'react-native';
import App from './App/Containers/App';
import {name as appName} from './app.json';
import StorybookUI from './storybook';

let app = (false) ? StorybookUI : App
AppRegistry.registerComponent(appName, () => App);
