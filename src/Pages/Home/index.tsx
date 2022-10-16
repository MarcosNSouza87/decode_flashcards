import React, {useRef, useState} from 'react';
import {View, FlatList, Text, Alert} from 'react-native';

import {Scoreboard} from '../../Components/Scoreboard';
import {Highlight} from '../../Components/Highlight';
import {FlipCard} from '../../Components/FlipCard';
import {Progress} from '../../Components/Progress';
import {Button} from '../../Components/Button';

import {CARDS} from '../../Utils/cards';
import {styles} from './styles';

export function Home() {
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

  async function handleCorrect() {
    setCurrentCard(0);
    handleScore();
  }

  return (
    <View style={styles.container}>
      <Highlight />
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
        <Button icon="dns" />

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
