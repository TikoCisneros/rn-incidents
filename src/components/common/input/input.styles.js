import styled from 'styled-components/native';
import { Item } from 'native-base';

import Typography from '../typography';
import Palette from '../../../styles/palette';

const ErrorLabel = styled(Typography)`
  color: ${Palette.danger};
  font-style: italic;
  margin-bottom: 5px;
`;

const InputContainer = styled(Item)`
  margin: 10px 0 5px;
`;

const iconStyle = { color: Palette.darkGrey400 };

export { ErrorLabel, InputContainer, iconStyle };
