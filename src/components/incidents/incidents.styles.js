import styled from 'styled-components/native';

import Typography from '../common/typography';

const IncidentsList = styled.FlatList`
  flex: 1;
`;

const IncidentTitle = styled(Typography)`
  font-weight: bold;
  text-align: center;
`;

export { IncidentsList, IncidentTitle };
