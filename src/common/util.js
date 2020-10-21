import { Dimensions } from 'react-native';

const getDeviceHeight = () => Dimensions.get('window').height;

const getDeviceWidth = () => Dimensions.get('window').width;

const isValid = (value) => value !== null && value !== undefined;

const isFunction = (value) => isValid(value) && typeof value === 'function';

const numerationsRemoval = (data) => {
  const words = data.split(' ');

  if (words.length === 1) {
    return data;
  }

  words.shift();
  return words.join(' ');
};

export {
  isValid,
  isFunction,
  getDeviceHeight,
  getDeviceWidth,
  numerationsRemoval,
};
