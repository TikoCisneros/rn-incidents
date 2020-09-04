/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// for storybook setup
// import StorybookUI from './storybook';
// AppRegistry.registerComponent(appName, () => StorybookUI);
AppRegistry.registerComponent(appName, () => App);
