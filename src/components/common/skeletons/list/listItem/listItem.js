import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styled from 'styled-components/native';
import Palette from '../../../../../styles/palette';

const Container = styled.View`
  border-width: 1px;
  border-radius: 4px;
  border-color: ${Palette.white};
  background-color: ${Palette.white};
  margin: 2px 0;
`;

const ListItem = () => (
  <Container>
    <SkeletonPlaceholder speed={2500}>
      <SkeletonPlaceholder.Item flexDirection="column" padding={10}>
        <SkeletonPlaceholder.Item width={160} height={12} borderRadius={4} />
        <SkeletonPlaceholder.Item
          marginTop={6}
          width={100}
          height={10}
          borderRadius={4}
        />
        <SkeletonPlaceholder.Item
          marginTop={6}
          alignSelf="flex-end"
          width={80}
          height={8}
          borderRadius={4}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  </Container>
);

export default ListItem;
