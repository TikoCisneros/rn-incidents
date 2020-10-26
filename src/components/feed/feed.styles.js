import styled from 'styled-components/native';
import Palette from '../../styles/palette';

const FeedList = styled.FlatList`
  flex: 1;
  padding: 2% 4% 0;
  background-color: ${Palette.darkGrayishBlue100};
`;

// eslint-disable-next-line import/prefer-default-export
export { FeedList };
