import {CommonActions} from '@react-navigation/native';
import React from 'react';
import * as DS from 'react-native';
import {Button} from '../../components/Button';
import Input from '../../components/Input';
import {CARDS} from '../../utils/cards';
import {styles as S} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ICard} from '../../@types/card';
import {UploadContext} from '../../context/uploadContext';

export default function ReviewList({navigation}: any) {
  const [search, setSearch] = React.useState('');
  const [cards, setCards] = React.useState<ICard[]>([]);
  const {upload, setUpload, setUpHome} = React.useContext(UploadContext);
  const getList = async () => {
    const list = await AsyncStorage.getItem('@list');
    const newList = list ? JSON.parse(list) : [];
    setCards(newList);
  };

  React.useEffect(() => {
    getList();
  }, []);

  React.useEffect(() => {
    if (upload) {
      getList();
      setUpload(false);
    }
  }, [upload, setUpload]);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filteredCards = CARDS.filter(card => card.front.includes(text));
    setCards(filteredCards);
  };

  const handleNavigation = async (card: any, type: string) => {
    if (type === 'review') {
      navigation.dispatch(CommonActions.navigate('Review', {card}));
    }
    if (type === 'delete') {
      const filteredCards = cards.filter(c => c.id !== card.id);
      await AsyncStorage.setItem('@list', JSON.stringify(filteredCards));
      setCards(filteredCards);
      setUpHome(true);
    }
  };

  const handleAddNewCard = () => {
    navigation.dispatch(CommonActions.navigate('ReviewFormCard'));
  };

  return (
    <DS.View style={S.container}>
      <Input
        placeholder="Pesquisar"
        value={search}
        onChangeText={handleSearch}
      />
      <DS.View style={S.contentTitleFlatList}>
        <DS.Text style={S.titleFlatList}>Cards</DS.Text>
        <DS.Text style={S.quantityFlatList}>{cards.length}</DS.Text>
      </DS.View>
      <DS.FlatList
        data={cards}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <DS.View style={S.card} key={item.id}>
            <DS.View style={S.cardInfos}>
              <DS.Text style={S.cardTitle}>
                {item.front.substring(0, 25)}
              </DS.Text>
              <DS.Text style={S.cardSubtitle}>
                {item.back.substring(0, 25)}
              </DS.Text>
            </DS.View>
            <DS.View style={S.cardActions}>
              <Button
                icon="delete"
                color="danger"
                onPress={() => handleNavigation(item, 'delete')}
              />
            </DS.View>
          </DS.View>
        )}
      />
      <DS.View style={S.footer}>
        <Button
          icon="add"
          color="secondary"
          size="large"
          onPress={handleAddNewCard}
        />
      </DS.View>
    </DS.View>
  );
}
