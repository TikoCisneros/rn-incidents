import styled from 'styled-components/native';
import { Textarea as NBTextarea } from 'native-base';

import { Content } from '../common/content';

const ContentContainer = styled(Content)`
  padding-top: 20px;
`;

const Textarea = styled(NBTextarea)`
  margin: 10px 0 20px;
`;

export { ContentContainer, Textarea };
