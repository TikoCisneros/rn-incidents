/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleProvider } from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

const Container = ({ children }) => (
  <SafeAreaView style={{ flex: 1, padding: 10 }}>{children}</SafeAreaView>
);

const ContainerThemed = ({ children }) => (
  <SafeAreaView style={{ flex: 1, padding: 10 }}>
    <StyleProvider style={getTheme(material)}>{children}</StyleProvider>
  </SafeAreaView>
);

export default Container;

export { ContainerThemed };
