import styled from 'styled-components/native';
import Palette from '../../../styles/palette';

const ItemContainer = styled.TouchableOpacity`
  padding: 15px;
  margin: 5px 0;
  background-color: ${Palette.yellowGold300};
`;

const ItemsList = styled.FlatList`
  flex: 1;
  margin: 5%;
`;

export { ItemContainer, ItemsList };
