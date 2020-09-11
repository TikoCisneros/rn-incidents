import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

describe('Login component', () => {
  it('renders correctly', () => {
    const onSubmitMock = jest.fn();
    const wrapper = shallow(<Login onSubmit={onSubmitMock} />);
    expect(wrapper.find('LinearGradient')).toHaveLength(1);
  });
});
