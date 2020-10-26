import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultNavOptions } from './config';

import Feeds from '../screens/feed';
import FeedDetail from '../screens/feedDetail';

import { FeedsScreens } from './screens';

const Stack = createStackNavigator();

const FeedsStack = () => (
  <Stack.Navigator
    initialRouteName={FeedsScreens.Feeds}
    screenOptions={DefaultNavOptions}>
    <Stack.Screen
      name={FeedsScreens.Feeds}
      component={Feeds}
      options={{ title: 'Noticias' }}
    />
    <Stack.Screen
      name={FeedsScreens.FeedDetail}
      component={FeedDetail}
      options={{ title: 'Noticia' }}
    />
  </Stack.Navigator>
);

export default FeedsStack;