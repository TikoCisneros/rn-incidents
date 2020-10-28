import React from 'react';
import { Content } from '../common/content';
import { TYPOGRAPHY_TYPES } from '../common/typography';
import {
  ScreenContainer,
  Image,
  NewsTitle,
  NewsDate,
  NewsAuthor,
  NewsParagraph,
} from './feedDetails.styles';

const FeedDetails = ({ title, date, uri, author, info }) => (
  <ScreenContainer>
    <Image source={{ uri }} resizeMode="cover" />
    <Content>
      <NewsTitle type={TYPOGRAPHY_TYPES.HEADING_3}>{title}</NewsTitle>
      <NewsAuthor type={TYPOGRAPHY_TYPES.SMALL_TEXT}>{author}</NewsAuthor>
      <NewsDate type={TYPOGRAPHY_TYPES.TINY_TEXT}>{date}</NewsDate>
      {info.map((item, index) => (
        <NewsParagraph
          type={TYPOGRAPHY_TYPES.BODY_TEXT}
          key={`np-${index + 1}`}>
          {item}
        </NewsParagraph>
      ))}
    </Content>
  </ScreenContainer>
);

export default FeedDetails;
