import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { ContainerThemed as Container } from '../../../storybook/components/container';

import Incidents from './incidents';

const incidentsData = Array(30)
  .fill()
  .map((_item, index) => ({
    id: `${index + 1}`,
    type: { value: `3. DEMO TYPE ${index + 1}` },
    subtype: { value: `3. DEMO SUB-TYPE ${index + 1}` },
    status: 'Pending',
  }));

storiesOf('Incidents', module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('default', () => <Incidents incidents={incidentsData} />);
