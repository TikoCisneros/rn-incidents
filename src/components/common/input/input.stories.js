import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { ContainerThemed as Container } from '../../../../storybook/components/container';

import Input from './input';
import IconsName from '../../../styles/icons';

const fnMock = () => {};

storiesOf('Input', module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('default', () => (
    <Input
      onChangeText={fnMock}
      onBlur={fnMock}
      value=""
      placeholder="Enter your username"
    />
  ))
  .add('secure', () => (
    <Input
      onChangeText={fnMock}
      onBlur={fnMock}
      value="123456"
      placeholder="Enter your password"
      secureTextEntry
    />
  ))
  .add('error', () => (
    <Input
      onChangeText={fnMock}
      onBlur={fnMock}
      value="123456"
      placeholder="Enter your password"
      isError
      errorLabel="Error"
    />
  ))
  .add('with icon', () => (
    <Input
      onChangeText={fnMock}
      onBlur={fnMock}
      value=""
      placeholder="Enter your password"
      iconName={IconsName.user}
    />
  ));
