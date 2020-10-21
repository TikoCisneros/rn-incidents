import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { isFunction } from '../../../common/util';
import boxesStyles from './cards.styles';

const Card = ({ style, onPress, children }) => {
  const Container = isFunction(onPress) ? TouchableOpacity : View;

  return (
    <Container style={[boxesStyles.card, style]} onPress={onPress}>
      {children}
    </Container>
  );
};

Card.propTypes = {
  onPress: PropTypes.func,
};

Card.defaultProps = {
  onPress: undefined,
};

// eslint-disable-next-line import/prefer-default-export
export { Card };
