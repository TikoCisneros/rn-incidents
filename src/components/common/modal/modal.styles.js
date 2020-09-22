import styled from 'styled-components/native';

import Palette from '../../../styles/palette';

const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Palette.outerSpace};
`;

const ModalContainer = styled.View`
  margin: 10%;
  background-color: ${Palette.white};
  border-radius: 20px;
  padding: 20px;
  elevation: 5;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  shadow-color: ${Palette.grayPrincipal};
  shadow-offset: 0px 2px;
`;

export { ModalBackground, ModalContainer };
