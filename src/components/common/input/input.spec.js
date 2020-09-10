import React from 'react';
import { shallow } from 'enzyme';
import Input from './input';

import IconsName from '../../../styles/icons';

describe('Button component', () => {
  it('renders default correctly', () => {
    const fnMock = jest.fn();
    const wrapper = shallow(
      <Input
        onChangeText={fnMock}
        onBlur={fnMock}
        value=""
        placeholder="Enter your username"
      />,
    );
    expect(wrapper.find('InputContainer')).toBeTruthy();
  });
  it('renders error correctly', () => {
    const fnMock = jest.fn();
    const wrapper = shallow(
      <Input
        onChangeText={fnMock}
        onBlur={fnMock}
        value=""
        placeholder="Enter your username"
        isError
        errorLabel="Error"
      />,
    );
    expect(wrapper.find('ErrorLabel')).toBeTruthy();
  });
  it('renders icon correctly', () => {
    const fnMock = jest.fn();
    const wrapper = shallow(
      <Input
        onChangeText={fnMock}
        onBlur={fnMock}
        value=""
        placeholder="Enter your username"
        iconName={IconsName.user}
      />,
    );
    expect(wrapper.find('Icon')).toBeTruthy();
  });
});
