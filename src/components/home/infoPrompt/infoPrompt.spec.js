import React from 'react';
import { shallow } from 'enzyme';

import InfoPrompt from './infoPrompt';

describe('InfoPrompt component', () => {
  it('renders correctly', () => {
    const props = {
      visible: false,
      onHidePrompt: jest.fn(),
    };
    const wrapper = shallow(<InfoPrompt {...props} />);
    expect(wrapper.find('MessagePrompt')).toHaveLength(1);
  });
});
