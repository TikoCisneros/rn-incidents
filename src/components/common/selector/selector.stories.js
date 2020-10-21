import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Container from '../../../../storybook/components/container';

import Selector from './selector';

const fnMock = () => {};

storiesOf('Selector', module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('default', () => <Selector placeholder="Only presentational" />)
  .add('actionable', () => (
    <Selector placeholder="Seleccione un item" onPress={fnMock} />
  ))
  .add('selected', () => (
    <Selector
      placeholder="Seleccione un item"
      value="Valor seleccionado"
      onPress={fnMock}
    />
  ));
