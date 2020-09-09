import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Container from '../../../../storybook/components/container';

import Typography, { TYPOGRAPHY_TYPES } from './typography';

storiesOf('Typography', module)
  .addDecorator((story) => <Container>{story()}</Container>)
  .add('default/small', () => <Typography>Text</Typography>)
  .add('default colored', () => <Typography color="green">Text</Typography>)
  .add('tiny', () => (
    <Typography type={TYPOGRAPHY_TYPES.TINY_TEXT}>Text</Typography>
  ))
  .add('body', () => (
    <Typography type={TYPOGRAPHY_TYPES.BODY_TEXT}>Text</Typography>
  ))
  .add('heading 5', () => (
    <Typography type={TYPOGRAPHY_TYPES.HEADING_5}>Text</Typography>
  ))
  .add('heading 4', () => (
    <Typography type={TYPOGRAPHY_TYPES.HEADING_4}>Text</Typography>
  ))
  .add('heading 3', () => (
    <Typography type={TYPOGRAPHY_TYPES.HEADING_3}>Text</Typography>
  ))
  .add('heading 2', () => (
    <Typography type={TYPOGRAPHY_TYPES.HEADING_2}>Text</Typography>
  ))
  .add('heading 1', () => (
    <Typography type={TYPOGRAPHY_TYPES.HEADING_1}>Text</Typography>
  ));
