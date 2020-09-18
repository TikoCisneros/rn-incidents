import React from 'react';
import { shallow } from 'enzyme';

import Typography from '../../common/typography';
import Incident from './incident';

describe('Incident component', () => {
  it('renders correctly', () => {
    const props = {
      type: { value: '' },
      subtype: { value: '' },
      status: '',
    };

    const wrapper = shallow(<Incident {...props} />);
    expect(wrapper.find(Typography)).toHaveLength(2);
  });
});
