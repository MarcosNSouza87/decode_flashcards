import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../utils/global/theme';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 40,
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    marginRight: 20,
    backfaceVisibility: 'hidden',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12,
  },
});
