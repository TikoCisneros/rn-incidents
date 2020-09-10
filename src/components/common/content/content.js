import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { contentStyles } from './content.styles';

const Content = styled.View`
  ${contentStyles}
`;

const ScrollableContent = styled.ScrollView`
  ${contentStyles}
`;

const LinearBg = styled(LinearGradient)`
  ${contentStyles}
`;

// eslint-disable-next-line react/prop-types
const LinearBgContent = ({ colors, children }) => (
  <LinearBg colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
    {children}
  </LinearBg>
);

export { Content, ScrollableContent, LinearBgContent };
