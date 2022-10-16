import React from 'react';
import * as DS from 'react-native';
import {Header} from '../../Components/Header';
import {styles as S} from './styles';

export default function ReviewForm() {
  return (
    <DS.View style={S.container}>
      <Header title={'Novo \n Cartão'} isBackButton />
      <DS.Text>
        Expanda sua lista adicionando novas palavras para fixar.
      </DS.Text>
    </DS.View>
  );
}
