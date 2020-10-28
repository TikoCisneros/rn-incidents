import React from 'react';
import { shallow } from 'enzyme';

import { IncidentsList } from './incidents.styles';
import Incidents from './incidents';

describe('Incidents component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Incidents
        incidents={[
          {
            type: { value: '' },
            subtype: { value: '' },
            status: '',
          },
        ]}
      />,
    );
    expect(wrapper.find(IncidentsList)).toHaveLength(1);
  });
});
