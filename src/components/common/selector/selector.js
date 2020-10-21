import React from 'react';

import { TYPOGRAPHY_TYPES } from '../typography';

import {
  SelectorContainer,
  SelectorText,
  SelectorIcon,
} from './selector.styles';
import Icons from '../../../styles/icons';
import { isFunction, isValid } from '../../../common/util';

const Selector = ({ placeholder, value, onPress }) => {
  const isValidValue = isValid(value);

  return (
    <SelectorContainer onPress={onPress}>
      <SelectorText
        type={TYPOGRAPHY_TYPES.HEADING_5}
        isValidValue={isValidValue}>
        {isValidValue ? value : placeholder}
      </SelectorText>
      {isFunction(onPress) && <SelectorIcon name={Icons.chevronForward} />}
    </SelectorContainer>
  );
};

export default Selector;
