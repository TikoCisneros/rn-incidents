import styled from 'styled-components/native';
import { contentStyles, fullScreenStyles } from './content.styles';

const Content = styled.View`
  ${contentStyles}
`;

const SafeArea = styled.SafeAreaView`
  ${fullScreenStyles}
`;

const KeyboardAvoider = styled.KeyboardAvoidingView`
  ${fullScreenStyles}
`;

const ScrollableContent = styled.ScrollView`
  ${contentStyles}
`;

export { Content, ScrollableContent, SafeArea, KeyboardAvoider };
