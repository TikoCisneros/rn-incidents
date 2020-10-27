import React from 'react';
import { shallow } from 'enzyme';
import Feed from './feed';

describe('Feed component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Feed navigation={{ push: jest.fn() }} />);
    expect(wrapper.find('Feed')).toHaveLength(1);
  });
});
