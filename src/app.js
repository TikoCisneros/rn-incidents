import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StyleProvider } from 'native-base';

import { SafeArea, KeyboardAvoider } from './components/common/content';
import Login from './components/login/login';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

const App = () => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

  const handleOnSubmit = (values) => alert(JSON.stringify(values));

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeArea>
        <KeyboardAvoider behavior={behavior}>
          <StyleProvider style={getTheme(material)}>
            <Login onSubmit={handleOnSubmit} />
          </StyleProvider>
        </KeyboardAvoider>
      </SafeArea>
    </>
  );
};

export default App;
