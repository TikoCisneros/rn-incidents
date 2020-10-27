import React from 'react';
import { View, Text } from 'react-native';

const FeedDetail = ({
  route: {
    params: { item },
  },
}) => (
  <View>
    <Text>HOLA</Text>
    <Text>{JSON.stringify(item)}</Text>
  </View>
);

export default FeedDetail;
