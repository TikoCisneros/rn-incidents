import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './listItem';

describe('ListItem component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper.find('SkeletonPlaceholder')).toHaveLength(1);
  });
});