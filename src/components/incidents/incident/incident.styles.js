import styled from 'styled-components/native';
import Palette from '../../../styles/palette';

import Typography from '../../common/typography';

const IncidentContainer = styled.View`
  border-width: 1px;
  border-radius: 4px;
  border-color: ${Palette.secondary700};
  background-color: ${Palette.secondary300};
  margin: 2px 0;
  padding: 5px;
`;

const IncidentStatus = styled(Typography)`
  font-style: italic;
  font-weight: bold;
  text-align: right;
`;

export { IncidentContainer, IncidentStatus };
