import styled from 'styled-components/native';
import Palette from '../../styles/palette';

import { Content } from '../common/content';
import Typography from '../common/typography';

const IncidentsList = styled.FlatList`
  flex: 1;
`;

const IncidentTitle = styled(Typography)`
  font-weight: bold;
  color: ${Palette.primary700};
  margin-bottom: 15px;
`;

const ListContainer = styled(Content)`
  background-color: ${Palette.darkGrayishBlue100};
  padding-top: 20px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

export { IncidentsList, IncidentTitle, ListContainer };
