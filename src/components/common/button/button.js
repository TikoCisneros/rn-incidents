import React from 'react';
import { Button as NBButton, Text } from 'native-base';
import PropTypes from 'prop-types';

const Button = ({ title, onPress, disabled, block, style }) => (
  <NBButton block={block} onPress={onPress} disabled={disabled} style={style}>
    <Text uppercase={false}>
      {title}
    </Text>
  </NBButton>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
};

Button.defaultProps = {
  onPress: undefined,
  disabled: false,
  block: true,
};

export default Button;
