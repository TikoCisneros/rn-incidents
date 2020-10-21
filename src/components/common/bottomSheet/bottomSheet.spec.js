import React from 'react';
import { shallow } from 'enzyme';
import BottomSheet from './bottomSheet';

describe('BottomSheet component tests', () => {
  test('Should render correctly', () => {
    const snapshot = shallow(<BottomSheet height={200} />);
    expect(snapshot).toMatchSnapshot();
  });
});
