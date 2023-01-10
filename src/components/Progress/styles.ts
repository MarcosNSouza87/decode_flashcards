import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/global/theme';

interface IStyles {
  currentProgress: number;
}

export const styles = ({currentProgress}: IStyles) =>
  StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
    },
    thumbProgressBar: {
      flex: 1,
      height: 7,
      borderRadius: 7,
      backgroundColor: COLORS.DARK_VIOLET,
      overflow: 'hidden',
      marginHorizontal: 7,
    },
    currentProgressBar: {
      height: 7,
      width: `${currentProgress}%`,
      backgroundColor: COLORS.VIOLET,
      position: 'absolute',
      left: 0,
      top: 0,
    },
    percentage: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    label: {
      fontSize: 10,
      color: COLORS.DARK_VIOLET,
    },
  });
