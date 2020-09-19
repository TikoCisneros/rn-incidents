import React from 'react';
import { shallow } from 'enzyme';

import { IncidentTitle } from './incidents.styles';
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
    expect(wrapper.find(IncidentTitle)).toHaveLength(1);
  });
});
