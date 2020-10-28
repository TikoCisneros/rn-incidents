import styled from 'styled-components/native';
import Palette from '../../styles/palette';

import { Content } from '../common/content';

const IncidentsList = styled.FlatList`
  flex: 1;
  padding-top: 20px;
`;

const ListContainer = styled(Content)`
  background-color: ${Palette.darkGrayishBlue100};
`;

export { IncidentsList, ListContainer };
