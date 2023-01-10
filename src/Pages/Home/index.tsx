import React, {useState} from 'react';
import {View, Text, Alert, Pressable} from 'react-native';

import {Scoreboard} from '../../components/Scoreboard';
import {FlipCard} from '../../components/FlipCard';
import {Progress} from '../../components/Progress';
import {Button} from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles';
import {ICard} from '../../@types/card';
import {UploadContext} from '../../context/uploadContext';

export default function Home({navigation}: any) {
  const [currentCard, setCurrentCard] = useState(0);
  const [cards, setCards] = useState<ICard[]>([]);
  const {upload, setUpload, setUpHome, upHome} =
    React.useContext(UploadContext);

  async function getList() {
    const list = await AsyncStorage.getItem('@list');
    const newList = list ? JSON.parse(list) : [];
    setCards(newList);
  }

  React.useEffect(() => {
    getList();
  }, []);

  React.useEffect(() => {
    if (upload || upHome) {
      getList();
      setUpload(false);
      setUpHome(false);
    }
  }, [upload, setUpload, upHome, setUpHome]);

  const totalOfCards = cards.length;

  async function handleScore() {
    await new Promise(resolve => {
      Alert.alert('Parabéns!', 'Como foi responder essa questão agora?', [
        {
          text: 'Fácil',
          onPress: () => {
            resolve('YES');
          },
        },
        {
          text: 'Difícil',
          onPress: () => {
            resolve('YES');
          },
        },
      ]);
    });
  }

  async function handleNavigation(route: string) {
    navigation.navigate(route);
  }

  async function handleCorrect() {
    const nextCard = currentCard >= totalOfCards - 1 ? 0 : currentCard + 1;
    setCurrentCard(nextCard);
    handleScore();
  }

  return (
    <View style={styles.container}>
      <Scoreboard reviewed={currentCard} />
      {cards.length > 0 ? (
        <>
          <FlipCard data={cards[currentCard]} />
          <Text style={styles.tip}>Toque no cartão para inverter</Text>
          <Progress totalOfCards={totalOfCards} currentCard={currentCard} />
        </>
      ) : (
        <View style={styles.emptyCards}>
          <Text style={styles.emptyCardsText}>Nenhum cartão cadastrado</Text>
          {/* adicionar botao para adiconar novo cartao */}
          <Pressable
            style={styles.button}
            onPress={() => handleNavigation('ReviewFormCard')}>
            <Text style={styles.emptyCardsText}>Adicionar novo cartão</Text>
          </Pressable>
        </View>
      )}

      <View style={styles.footer}>
        <Button icon="dns" onPress={() => handleNavigation('ReviewListCard')} />

        <Button
          icon="thumb-up-alt"
          color="secondary"
          size="large"
          onPress={handleCorrect}
        />

        <Button icon="push-pin" />
      </View>
    </View>
  );
}
