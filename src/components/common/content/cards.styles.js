import { StyleSheet } from 'react-native';
import Palette from '../../../styles/palette';

const boxesStyles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 0.2,
    borderColor: Palette.grayLight,
    shadowColor: Palette.grayPrincipal,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: Palette.white,
    marginHorizontal: 2,
  },
});

export default boxesStyles;
