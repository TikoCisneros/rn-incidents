import { DefaultTheme } from '@react-navigation/native';
import Palette from '../styles/palette';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Palette.white,
  },
};

export default Theme;
