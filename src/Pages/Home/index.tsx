import React, {useRef, useState} from 'react';
import {View, FlatList, Text, Alert} from 'react-native';

import {Scoreboard} from '../../components/Scoreboard';
import {Header} from '../../components/Header';
import {FlipCard} from '../../components/FlipCard';
import {Progress} from '../../components/Progress';
import {Button} from '../../components/Button';

import {CARDS} from '../../utils/cards';
import {styles} from './styles';
import {CommonActions, useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [currentCard, setCurrentCard] = useState(0);
  const cardListRef = useRef<FlatList>(null);

  const totalOfCards = CARDS.length - 1;

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
    navigation.dispatch(CommonActions.navigate(route));
  }

  async function handleCorrect() {
    setCurrentCard(0);
    handleScore();
  }

  return (
    <View style={styles.container}>
      <Header title={'Rever ajuda a fixar \n o conhecimento.'} />
      <Scoreboard reviewed={currentCard} />

      <FlatList
        ref={cardListRef}
        data={CARDS}
        keyExtractor={item => item.id}
        renderItem={({item}) => <FlipCard data={item} />}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.tip}>Toque no cartão para inverter</Text>

      <Progress totalOfCards={totalOfCards} currentCard={currentCard} />

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
