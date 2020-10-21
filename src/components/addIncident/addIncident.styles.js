import styled from 'styled-components/native';
import { Textarea as NBTextarea } from 'native-base';
import { ScrollableContent } from '../common/content';

const ContentContainer = styled(ScrollableContent)`
  padding-top: 20px;
`;

const Textarea = styled(NBTextarea)`
  margin: 10px 0 20px;
`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
`;

export { ContentContainer, Textarea, Image };
