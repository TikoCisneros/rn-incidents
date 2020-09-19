import { DefaultTheme } from '@react-navigation/native';
import { Platform } from 'react-native';
import Palette from '../styles/palette';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Palette.white,
  },
};

const DefaultNavOptions = {
  headerStyle: {
    backgroundColor: Palette.primary500,
    borderBottomWidth: 1.5,
    borderBottomColor: Palette.darkGrey300,
  },
  headerTintColor: Palette.white,
  headerTitleStyle: {
    fontStyle: 'italic',
    fontFamily: 'Roboto',
    fontSize: Platform.OS === 'android' ? 20 : 18,
  },
  headerTitleAlign: 'center',
  headerBackTitle: 'Atrás',
};

export { CustomTheme, DefaultNavOptions };
