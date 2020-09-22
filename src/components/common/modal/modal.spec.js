import React from 'react';
import { shallow } from 'enzyme';
import Modal from './modal';
import { ModalBackground } from './modal.styles';

describe('Modal component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(ModalBackground)).toHaveLength(1);
  });
});
