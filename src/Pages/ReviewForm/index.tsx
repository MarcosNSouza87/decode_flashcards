import React from 'react';
import * as DS from 'react-native';
import {Header} from '../../Components/Header';
import {styles as S} from './styles';

export default function ReviewForm() {
  return (
    <DS.View style={S.container}>
      <Header title={'Novo \n Cartão'} isBackButton />
      <DS.Text style={S.title}>
        Expanda sua lista adicionando novas palavras para fixar.
      </DS.Text>
      <DS.View style={S.cards}>
        <DS.TextInput style={S.input} placeholder="Frente do Cartao..." />
        <DS.TextInput style={S.input} placeholder="Verso do Cartao..." />
      </DS.View>
      <DS.View style={S.buttons}>
        <DS.TouchableOpacity style={S.button}>
          <DS.Text style={S.buttonText}>Salvar</DS.Text>
        </DS.TouchableOpacity>
      </DS.View>
    </DS.View>
  );
}
