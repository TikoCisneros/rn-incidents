import React from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Icon = ({ name, style }) => (
  <IonicIcon name={name} style={[style, { fontSize: 20 }]} />
);

export default Icon;
