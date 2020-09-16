import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StyleProvider } from 'native-base';

import { SafeArea, KeyboardAvoider } from './components/common/content';
import Navigation from './navigation';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

const App = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeArea>
        <KeyboardAvoider behavior={behavior}>
          <StyleProvider style={getTheme(material)}>
            <Navigation />
          </StyleProvider>
        </KeyboardAvoider>
      </SafeArea>
    </>
  );
};

export default App;
