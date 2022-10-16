import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../Button';
// import PinSvg from '../../Assets/pin.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  isBackButton?: boolean;
}

export function Header({title, isBackButton = false}: HeaderProps) {
  const navigation = useNavigation();
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
        <Icon name="pinwheel" size={32} color="#fff" />
      )}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
