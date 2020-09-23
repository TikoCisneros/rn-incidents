import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './avatar';

describe('Avatar component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Avatar size={40} firstLetter="A" />);
    expect(wrapper).toMatchSnapshot();
  });
});