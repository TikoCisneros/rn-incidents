import React from 'react';

import { ButtonContainer, ButtonIcon } from './navButton.styles';

const NavButton = ({ onPress, iconName }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonIcon name={iconName} />
  </ButtonContainer>
);

export default NavButton;
