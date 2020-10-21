import styled from 'styled-components/native';

import { Content } from '../common/content';
import Button from '../common/button';
import Palette from '../../styles/palette';
import { getDeviceWidth } from '../../common/util';

const gradientColors = [Palette.primary500, Palette.primary300, Palette.white];
const gradientStart = { x: 0, y: 0 };
const gradientEnd = { x: 1, y: 1 };
const gradientContainer = { flex: 1 };

const ContentContainer = styled(Content)`
  justify-content: center;
`;

const width = getDeviceWidth();

const LogoContainer = styled.View`
  position: absolute;
  top: -65px;
  width: ${(width * 9) / 10}px;
  justify-content: center;
  flex-direction: row;
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
