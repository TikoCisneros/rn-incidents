import React from 'react';
import { shallow } from 'enzyme';
import Icon from './icon';

describe('Icon component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Icon name="person" />);
    expect(wrapper).toMatchSnapshot();
  });
});