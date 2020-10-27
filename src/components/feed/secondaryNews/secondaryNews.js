import React from 'react';

import { TYPOGRAPHY_TYPES } from '../../common/typography';
import {
  CardContainer,
  Image,
  InfoContainer,
  TitleLabel,
  DateLabel,
} from './secondaryNews.styles';

const SecondaryNews = ({ title, date, uri, onPress }) => (
  <CardContainer onPress={onPress}>
    <Image source={{ uri }} resizeMode="cover" />
    <InfoContainer>
      <TitleLabel type={TYPOGRAPHY_TYPES.HEADING_3}>{title}</TitleLabel>
      <DateLabel>{date}</DateLabel>
    </InfoContainer>
  </CardContainer>
);

export default SecondaryNews;
