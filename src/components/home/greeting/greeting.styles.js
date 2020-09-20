import styled, { css } from 'styled-components/native';
import Palette from '../../../styles/palette';
import Typography from '../../common/typography';
import Icon from '../../common/icon';

const containerStyles = css`
  flex-direction: row;
  align-items: center;
`;

const Container = styled.View`
  ${containerStyles}
  padding: 6% 5%;
  justify-content: space-between;
`;

const GreetingContainer = styled.View`
  ${containerStyles}
`;

const GreetingText = styled(Typography)`
  margin-left: 15px;
  color: ${Palette.graySecondary};
`;

const InfoIcon = styled(Icon)`
  color: ${Palette.info};
  font-size: 40px;
  margin-right: 10px;
`;

export { Container, GreetingContainer, GreetingText, InfoIcon };
