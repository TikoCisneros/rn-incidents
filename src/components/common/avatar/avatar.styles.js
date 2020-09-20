import styled from 'styled-components/native';
import Typography from '../typography';

import Palette from '../../../styles/palette';

const Circle = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${Palette.pureOrange200};
`;

const Letter = styled(Typography)`
  color: ${Palette.secondary700};
`;

export { Circle, Letter };
