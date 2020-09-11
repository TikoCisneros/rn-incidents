import styled from 'styled-components/native';

import { Content } from '../common/content';
import Button from '../common/button';
import Palette from '../../styles/palette';

const gradientColors = [Palette.primary500, Palette.primary300, Palette.white];
const gradientStart = { x: 0, y: 0 };
const gradientEnd = { x: 1, y: 1 };
const gradientContainer = { flex: 1 };

const ContentContainer = styled(Content)`
  justify-content: center;
`;

const LogoContainer = styled.View`
  position: absolute;
  top: -70px;
  left: 125px;
`;

const FormContainer = styled.View`
  background-color: ${Palette.white};
  padding: 60px 20px 20px;
  border: 1px ${Palette.white} solid;
  border-radius: 16px;
`;

const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

export {
  gradientContainer,
  gradientColors,
  gradientStart,
  gradientEnd,
  ContentContainer,
  FormContainer,
  SubmitButton,
  LogoContainer,
};
