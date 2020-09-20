import React from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Icon = ({ name, style }) => (
  <IonicIcon name={name} style={[{ fontSize: 20 }, style]} />
);

export default Icon;
