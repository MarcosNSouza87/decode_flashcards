import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    color: COLORS.BLACK,
  },
});
