import styled from 'styled-components';

import { Card } from '../content';
import Typography from '../typography';
import Icon from '../icon';
import Palette from '../../../styles/palette';

const SelectorContainer = styled(Card)`
  padding: 14px;
  margin-vertical: 10px;
  flex-direction: row;
  align-items: center;
`;

const SelectorText = styled(Typography)`
  flex: 1;
  margin-left: 6px;
  color: ${(props) =>
    props.isValidValue ? Palette.secondary500 : Palette.grayPrincipal};
`;

const SelectorIcon = styled(Icon)`
  color: ${Palette.primary500};
  font-size: 25;
`;

export { SelectorContainer, SelectorText, SelectorIcon };
