import {StyleSheet} from 'react-native';
import {COLORS} from '../../Global/theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  small: {
    width: 60,
    height: 60,
  },
  large: {
    width: 80,
    height: 80,
  },
  primary: {
    backgroundColor: COLORS.WHITE,
  },
  secondary: {
    backgroundColor: COLORS.VIOLET,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});
