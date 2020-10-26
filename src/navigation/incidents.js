import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultNavOptions } from './config';

import Home from '../screens/home';
import AddIncident from '../screens/addIncident';

import { IncidentsScreen } from './screens';

const Stack = createStackNavigator();

const IncidentsStack = () => (
  <Stack.Navigator
    initialRouteName={IncidentsScreen.HomeIncident}
    screenOptions={DefaultNavOptions}>
    <Stack.Screen
      name={IncidentsScreen.HomeIncident}
      component={Home}
      options={{ title: 'Incidencias' }}
    />
    <Stack.Screen
      name={IncidentsScreen.AddIncident}
      component={AddIncident}
      options={{ title: 'Nueva Incidencia' }}
    />
  </Stack.Navigator>
);

export default IncidentsStack;
