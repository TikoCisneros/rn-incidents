import React from 'react';
import { SafeAreaView } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import Typography from './typography';

storiesOf('Typography', module)
  .addDecorator((story) => (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>{story()}</SafeAreaView>
  ))
  .add('default', () => <Typography>Miau</Typography>);
