import styled from 'styled-components/native';
import { Fab } from 'native-base';

import Palette from '../../styles/palette';

const FabButton = styled(Fab)`
  background-color: ${Palette.primary500};
`;

// eslint-disable-next-line import/prefer-default-export
export { FabButton };
