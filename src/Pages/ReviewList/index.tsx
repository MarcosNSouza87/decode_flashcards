import {CommonActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import * as DS from 'react-native';
import {Button} from '../../Components/Button';
import {Header} from '../../Components/Header';
import Input from '../../Components/Input';
import {CARDS} from '../../Utils/cards';
import {styles as S} from './styles';

export default function ReviewList() {
  const navigatioin = useNavigation();
  const [search, setSearch] = React.useState('');
  const [cards, setCards] = React.useState(CARDS);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filteredCards = CARDS.filter(card => card.front.includes(text));
    setCards(filteredCards);
  };

  const handleNavigation = (card: any, type: string) => {
    if (type === 'review') {
      navigatioin.dispatch(CommonActions.navigate('Review', {card}));
    }
    if (type === 'delete') {
      const filteredCards = CARDS.filter(c => c.id !== card.id);
      setCards(filteredCards);
    }
  };

  const handleAddNewCard = () => {
    navigatioin.dispatch(CommonActions.navigate('ReviewFormCard'));
  };

  return (
    <DS.View style={S.container}>
      <Header title={'Lista de \nRevisão'} isBackButton />
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
