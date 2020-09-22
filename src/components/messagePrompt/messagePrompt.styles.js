import styled from 'styled-components/native';
import Palette from '../../styles/palette';

import Icon from '../common/icon';
import Typography from '../common/typography';

const PromptIcon = styled(Icon)`
  color: ${(props) => Palette[props.colorType]};
  font-size: 80px;
`;

const PromptTitle = styled(Typography)`
  color: ${(props) => Palette[props.colorType]};
`;

const PromptDescription = styled(Typography)`
  text-align: justify;
  margin: 10px 0 25px;
`;

const containerStyles = { alignItems: 'center' };

export { PromptIcon, PromptTitle, PromptDescription, containerStyles };
