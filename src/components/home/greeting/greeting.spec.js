import React from 'react';
import { shallow } from 'enzyme';
import Greeting from './greeting';
import { GreetingText } from './greeting.styles';

describe('Greeting component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Greeting userName="" onPressInfo={jest.fn()} />);
    expect(wrapper.find(GreetingText)).toHaveLength(1);
  });
});
