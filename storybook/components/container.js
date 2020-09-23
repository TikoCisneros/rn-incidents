import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { StyleProvider } from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

const Container = ({ children }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, padding: 10 }}>{children}</View>
  </SafeAreaView>
);

const ContainerThemed = ({ children }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <StyleProvider style={getTheme(material)}>
      <View style={{ flex: 1, padding: 10 }}>{children}</View>
    </StyleProvider>
  </SafeAreaView>
);

export default Container;

export { ContainerThemed };
