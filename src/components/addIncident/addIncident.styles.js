import styled from 'styled-components/native';
import { Textarea as NBTextarea } from 'native-base';
import { ScrollableContent } from '../common/content';
import ButtonComponent from '../common/button';

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

const Button = styled(ButtonComponent)`
  margin: 5%;
`;

export { ContentContainer, Textarea, Image, Button };
