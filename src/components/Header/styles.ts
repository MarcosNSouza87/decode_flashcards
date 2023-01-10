import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {COLORS} from '../../utils/global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: getStatusBarHeight() + 35,
    paddingBottom: 48,
    paddingHorizontal: 24,
    backgroundColor: COLORS.BACKGROUND,
  },
  title: {
    fontSize: 22,
    color: COLORS.WHITE,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  logo: {
    width: 50,
    height: 50,
  },
});
