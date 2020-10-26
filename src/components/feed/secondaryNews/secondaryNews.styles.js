import styled from 'styled-components/native';
import Palette from '../../../styles/palette';

import { Card } from '../../common/content';
import Typography from '../../common/typography';

const CardContainer = styled(Card)`
  margin: 5px 0;
  flex-direction: row;
  height: 110px;
`;

const Image = styled.Image`
  width: 45%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const InfoContainer = styled.View`
  flex: 1;
`;

const TitleLabel = styled(Typography)`
  margin: 5px 10px;
  color: ${Palette.darkGrey500};
`;

const DateLabel = styled(Typography)`
  margin: 0 10px 10px;
  text-align: right;
  color: ${Palette.darkGrey400};
`;

export { CardContainer, Image, InfoContainer, TitleLabel, DateLabel };
