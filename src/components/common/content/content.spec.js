import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Content, ScrollableContent } from './content';

describe('Content components', () => {
  it('should render Content successfully', () => {
    const component = <Content />;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render ScrollableContent successfully', () => {
    const component = <ScrollableContent />;
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
