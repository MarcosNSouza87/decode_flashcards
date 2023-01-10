import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../Button';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/Logo';

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
        <Logo />
      )}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
