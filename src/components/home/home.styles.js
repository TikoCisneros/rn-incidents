import styled from 'styled-components/native';
import { Fab } from 'native-base';

import Typography from '../common/typography';
import Palette from '../../styles/palette';

const GreetingContainer = styled.View`
  flex-direction: row;
  padding: 15px 0;
`;

const Name = styled(Typography)`
  font-style: italic;
`;

const FabButton = styled(Fab)`
  background-color: ${Palette.primary500};
`;

export { GreetingContainer, Name, FabButton };
