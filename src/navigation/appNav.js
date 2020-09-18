import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Theme from './theme';

import Login from '../screens/login';
import Home from '../screens/home';

import { AppScreens } from './screens';

const Stack = createStackNavigator();

const AppNav = () => (
  <NavigationContainer theme={Theme}>
    <Stack.Navigator>
      <Stack.Screen
        name={AppScreens.Login}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={AppScreens.Home} component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNav;
