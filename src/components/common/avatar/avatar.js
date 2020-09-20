import React from 'react';
import PropTypes from 'prop-types';

import { TYPOGRAPHY_TYPES } from '../typography';
import { Circle, Letter } from './avatar.styles';

const Avatar = ({ size, firstLetter }) => {
  const radio = size / 2;

  return (
    <Circle
      style={{
        width: size,
        height: size,
        borderRadius: radio,
      }}>
      <Letter type={TYPOGRAPHY_TYPES.HEADING_2}>{firstLetter}</Letter>
    </Circle>
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
  firstLetter: PropTypes.string.isRequired,
};

Avatar.defaultProps = { size: 50 };

export default Avatar;
