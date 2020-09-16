import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { ContainerThemed as Container } from '../../../../storybook/components/container';

import Incident from './incident';

const props = {
  type: { value: '3. DEMO TYPE' },
  subtype: { value: '3. DEMO SUB-TYPE' },
  status: 'Pending',
};

storiesOf('Incident', module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('default', () => <Incident {...props} />);
