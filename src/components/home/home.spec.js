import React from 'react';
import { shallow } from 'enzyme';

import { FabButton } from './home.styles';
import Home from './home';

describe('Home component', () => {
  it('renders correctly', () => {
    const props = {
      userName: '',
      incidents: [],
      onAddIncidentPress: jest.fn(),
    };
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper.find(FabButton)).toHaveLength(1);
  });
});
