import React from 'react';

import { TYPOGRAPHY_TYPES } from '../../common/typography';
import {
  CardContainer,
  Image,
  TitleLabel,
  DateLabel,
} from './principalNews.styles';

const PrincipalNews = ({ title, date, uri }) => (
  <CardContainer>
    <Image source={{ uri }} resizeMode="cover" />
    <TitleLabel type={TYPOGRAPHY_TYPES.HEADING_3}>{title}</TitleLabel>
    <DateLabel>{date}</DateLabel>
  </CardContainer>
);

export default PrincipalNews;
