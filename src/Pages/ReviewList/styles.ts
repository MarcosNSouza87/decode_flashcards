import {StyleSheet} from 'react-native';
import {COLORS} from '../../Global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.BACKGROUND,
  },
  contentTitleFlatList: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleFlatList: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    marginBottom: 10,
  },
  quantityFlatList: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.WHITE,
    marginBottom: 10,
  },
  card: {
    width: '100%',
    height: 80,
    borderRadius: 15,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfos: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 15,
  },
  cardTitle: {
    flex: 1,
    color: COLORS.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    flex: 1,
    color: COLORS.BLACK,
    fontSize: 16,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 80,
  },
  footer: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 0,
  },
});
