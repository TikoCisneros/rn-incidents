/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './src/app';
import { name as appName } from './app.json';
import store from './src/store';

const RNRedux = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

// for storybook setup
// import StorybookUI from './storybook';
// AppRegistry.registerComponent(appName, () => StorybookUI);
AppRegistry.registerComponent(appName, () => RNRedux);
