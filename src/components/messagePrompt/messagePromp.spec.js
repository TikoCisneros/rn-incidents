import React from 'react';
import { shallow } from 'enzyme';
import MessagePrompt from './messagePrompt';

describe('MessagePrompt component', () => {
  it('renders correctly', () => {
    const props = {
      visible: false,
      onHideModal: jest.fn(),
      title: '',
      description: '',
      type: '',
    };
    const wrapper = shallow(<MessagePrompt {...props} />);
    expect(wrapper.find('Modal')).toHaveLength(1);
  });
});
