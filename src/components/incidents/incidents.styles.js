import styled from 'styled-components/native';
import Palette from '../../styles/palette';

import Typography from '../common/typography';

const IncidentsList = styled.FlatList`
  flex: 1;
`;

const IncidentTitle = styled(Typography)`
  font-weight: bold;
  text-align: center;
  color: ${Palette.primary700};
`;

export { IncidentsList, IncidentTitle };
