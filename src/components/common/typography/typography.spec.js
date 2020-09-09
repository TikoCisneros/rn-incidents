import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Typography, { TYPOGRAPHY_TYPES } from './typography';

describe('Typography component', () => {
  it('should render SMALL_TEXT', () => {
    const component = <Typography type={TYPOGRAPHY_TYPES.SMALL_TEXT} />;
    const tree = renderer.create(component).toJSON();
    expect(tree.props.type).toBe(TYPOGRAPHY_TYPES.SMALL_TEXT);
  });
  it('should render BODY_TEXT', () => {
    const component = <Typography type={TYPOGRAPHY_TYPES.BODY_TEXT} />;
    const tree = renderer.create(component).toJSON();
    expect(tree.props.type).toBe(TYPOGRAPHY_TYPES.BODY_TEXT);
  });
  it('should render TINY_TEXT', () => {
    const component = <Typography type={TYPOGRAPHY_TYPES.TINY_TEXT} />;
    const tree = renderer.create(component).toJSON();
    expect(tree.props.type).toBe(TYPOGRAPHY_TYPES.TINY_TEXT);
  });
  it('should render HEADING_1', () => {
    const component = <Typography type={TYPOGRAPHY_TYPES.HEADING_1} />;
    const tree = renderer.create(component).toJSON();
    expect(tree.props.type).toBe(TYPOGRAPHY_TYPES.HEADING_1);
  });
  it('should render HEADING_2', () => {
    const component = <Typography type={TYPOGRAPHY_TYPES.HEADING_2} />;
    const tree = renderer.create(component).toJSON();
    expect(tree.props.type).toBe(TYPOGRAPHY_TYPES.HEADING_2);
  });
  it('should render HEADING_3', () => {
    const component = <Typography type={TYPOGRAPHY_TYPES.HEADING_3} />;
    const tree = renderer.create(component).toJSON();
    expect(tree.props.type).toBe(TYPOGRAPHY_TYPES.HEADING_3);
  });
  it('should render HEADING_4', () => {
    const component = <Typography type={TYPOGRAPHY_TYPES.HEADING_4} />;
    const tree = renderer.create(component).toJSON();
    expect(tree.props.type).toBe(TYPOGRAPHY_TYPES.HEADING_4);
  });
  it('should render HEADING_5', () => {
    const component = <Typography type={TYPOGRAPHY_TYPES.HEADING_5} />;
    const tree = renderer.create(component).toJSON();
    expect(tree.props.type).toBe(TYPOGRAPHY_TYPES.HEADING_5);
  });
});
