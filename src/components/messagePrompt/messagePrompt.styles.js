import styled from 'styled-components/native';
import Palette from '../../styles/palette';

import Icon from '../common/icon';
import Typography from '../common/typography';
import ButtonComponent from '../common/button';

const PromptIcon = styled(Icon)`
  color: ${(props) => Palette[props.colorType]};
  font-size: 80px;
`;

const PromptTitle = styled(Typography)`
  color: ${(props) => Palette[props.colorType]};
  margin-bottom: 20px;
`;

const PromptDescription = styled(Typography)`
  text-align: justify;
`;

const containerStyles = { alignItems: 'center' };

const Button = styled(ButtonComponent)`
  margin-top: 15px;
`;

export { PromptIcon, PromptTitle, PromptDescription, Button, containerStyles };
