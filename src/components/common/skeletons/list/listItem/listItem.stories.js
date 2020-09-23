import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Container from '../../../../../../storybook/components/container';

import ListItem from './listItem';

storiesOf('Skeleton/ListItem', module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('default', () => <ListItem />);
