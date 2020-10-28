import styled from 'styled-components/native';
import Palette from '../../../styles/palette';

import Icon from '../icon';

const ButtonContainer = styled.TouchableOpacity`
  margin-right: 15px;
`;

const ButtonIcon = styled(Icon)`
  font-size: 25px;
  color: ${Palette.white};
`;

export { ButtonContainer, ButtonIcon };
