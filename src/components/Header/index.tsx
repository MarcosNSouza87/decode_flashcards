import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../Button';
import {styles} from './styles';
import Logo from '../../assets/Logo';

export function Header({route, navigation}: any) {
  const title = [
    {name: 'Start', title: 'Rever ajuda a fixar \n o conhecimento.'},
    {name: 'ReviewListCard', title: 'Lista de \nRevisão'},
    {name: 'ReviewFormCard', title: 'Novo \n Cartão'},
  ].find(item => item.name === route.name)?.title;

  const isBackButton = ['ReviewListCard', 'ReviewFormCard'].includes(
    route.name,
  );

  return (
    <View style={styles.container}>
      {isBackButton ? (
        <Button
          size="small"
          color="secondary"
          icon="arrow-back"
          onPress={() => navigation.goBack()}
        />
      ) : (
        <Logo />
      )}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
