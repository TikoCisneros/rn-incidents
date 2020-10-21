import { Dimensions } from 'react-native';

const getDeviceHeight = () => Dimensions.get('window').height;

const getDeviceWidth = () => Dimensions.get('window').width;

const isValid = (value) => value !== null && value !== undefined;

const isFunction = (value) => isValid(value) && typeof value === 'function';

export { isValid, isFunction, getDeviceHeight, getDeviceWidth };
