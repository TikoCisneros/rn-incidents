import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('Button component', () => {
  it('renders correctly', () => {
    const onPressMock = jest.fn();
    const wrapper = shallow(<Button title="TEXT" onPress={onPressMock} />);
    wrapper.props().onPress();
    expect(onPressMock).toHaveBeenCalled();
  });
});
