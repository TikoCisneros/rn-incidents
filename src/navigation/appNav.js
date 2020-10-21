import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CustomTheme, DefaultNavOptions } from './config';

import Login from '../screens/login';
import Home from '../screens/home';
import AddIncident from '../screens/addIncident';

import { AppScreens } from './screens';

const Stack = createStackNavigator();

const AppNav = () => (
  <NavigationContainer theme={CustomTheme}>
    <Stack.Navigator
      initialRouteName={AppScreens.Login}
      screenOptions={DefaultNavOptions}>
      <Stack.Screen
        name={AppScreens.Login}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppScreens.Home}
        component={Home}
        options={{ title: 'Sity App' }}
      />
      <Stack.Screen
        name={AppScreens.AddIncident}
        component={AddIncident}
        options={{ title: 'Nuevo Incidente' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNav;
