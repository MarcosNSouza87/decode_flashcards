import React from 'react';
import * as DS from 'react-native';
import {Header} from '../../Components/Header';
import {styles as S} from './styles';

export default function ReviewList() {
  return (
    <DS.View style={S.container}>
      <Header title={'Lista de \nRevisão'} isBackButton />
      <DS.Text>ReviewList</DS.Text>
    </DS.View>
  );
}
