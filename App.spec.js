import React from 'react';
import { StatusBar } from 'react-native';
import { shallow } from 'enzyme';
import App from './App';

it('renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(StatusBar)).toHaveLength(1);
});
