import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import List from './list';

describe('List component', () => {
  it('renders wait correctly', () => {
    const wrapper = shallow(<List numberOfItems={2} isLoading />);
    expect(wrapper.find('ListItem')).toHaveLength(2);
  });
  it('renders children correctly', () => {
    const wrapper = shallow(
      <List numberOfItems={2} isLoading={false}>
        <Text>Hello</Text>
      </List>,
    );
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});
