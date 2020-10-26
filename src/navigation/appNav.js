import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CustomTheme, DefaultNavOptions } from './config';

import Login from '../screens/login';
import MainTabs from './main';

import { AppScreens } from './screens';

const Stack = createStackNavigator();

const AppNav = () => (
  <NavigationContainer theme={CustomTheme}>
    <Stack.Navigator
      initialRouteName={AppScreens.Login}
      screenOptions={{ ...DefaultNavOptions, headerShown: false }}>
      <Stack.Screen name={AppScreens.Login} component={Login} />
      <Stack.Screen name={AppScreens.App} component={MainTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNav;
