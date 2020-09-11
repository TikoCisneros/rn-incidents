import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('StatusBar')).toHaveLength(1);
  });
});
