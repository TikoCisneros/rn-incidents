import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { ContainerThemed as Container } from '../../../../storybook/components/container';

import Button from './button';

storiesOf('Button', module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('default', () => <Button title="Click me" />)
  .add('disabled', () => <Button title="Click me" disabled />)
  .add('not block', () => <Button title="Click me" block={false} />);
