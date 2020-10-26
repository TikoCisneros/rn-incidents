import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '../components/common/icon';

import FeedsStack from './feed';
import IncidentsStack from './incidents';

import { MainScreens } from './screens';
import Palette from '../styles/palette';
import Icons from '../styles/icons';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route: { name } }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (name === MainScreens.FeedTab) {
          iconName = focused ? Icons.newspaper : Icons.newspaperOutline;
        } else if (name === MainScreens.IncidentsTab) {
          iconName = focused ? Icons.pulse : Icons.pulseOutline;
        }

        return <Icon name={iconName} style={{ fontSize: size, color }} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: Palette.secondary500,
      inactiveTintColor: Palette.darkGrey400,
    }}>
    <Tab.Screen
      name={MainScreens.FeedTab}
      component={FeedsStack}
      options={{ tabBarLabel: 'Noticias' }}
    />
    <Tab.Screen
      name={MainScreens.IncidentsTab}
      component={IncidentsStack}
      options={{ tabBarLabel: 'Incidencias' }}
    />
  </Tab.Navigator>
);

export default MainTabs;
