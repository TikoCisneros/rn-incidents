import styled from 'styled-components/native';
import { contentStyles } from './content.styles';

const Content = styled.View`
  ${contentStyles}
`;

const ScrollableContent = styled.ScrollView`
  ${contentStyles}
`;

export { Content, ScrollableContent };
