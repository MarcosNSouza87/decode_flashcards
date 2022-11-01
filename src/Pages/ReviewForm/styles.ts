import {StyleSheet} from 'react-native';
import {COLORS} from '../../Global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.BACKGROUND,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  cards: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    height: 200,
    justifyContent: 'center',
  },
  buttons: {
    marginTop: 20,
    width: '100%',
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
  },
});
