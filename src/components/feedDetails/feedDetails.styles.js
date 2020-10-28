import styled from 'styled-components/native';
import Palette from '../../styles/palette';
import Typography from '../common/typography';

const ScreenContainer = styled.ScrollView`
  flex: 1;
`;

const Image = styled.Image`
  width: 100%;
  height: 300px;
`;

const NewsTitle = styled(Typography)`
  margin: 25px 0 5px;
  color: ${Palette.darkGrey500};
`;

const NewsAuthor = styled(Typography)`
  margin: 4px 0;
  color: ${Palette.darkGrey400};
`;

const NewsDate = styled(Typography)`
  margin: 2px 0 15px;
  text-align: right;
  color: ${Palette.darkGrey300};
`;

const NewsParagraph = styled(Typography)`
  margin: 10px 0;
  text-align: justify;
`;

export {
  ScreenContainer,
  Image,
  NewsTitle,
  NewsDate,
  NewsAuthor,
  NewsParagraph,
};
