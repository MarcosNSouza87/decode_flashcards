import {StyleSheet} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {COLORS} from '../../utils/global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.BACKGROUND,
  },
  emptyCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  emptyCardsText: {
    color: COLORS.WHITE,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.GREEN,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tip: {
    color: COLORS.WHITE,
    fontSize: 14,
    marginVertical: 34,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getBottomSpace() + 30,
    marginTop: 30,
  },
});
