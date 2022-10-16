import React from 'react';
import * as DS from 'react-native';
import {styles} from './styles';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function Input({placeholder, value, onChangeText}: InputProps) {
  return (
    <DS.View style={styles.container}>
      <DS.TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </DS.View>
  );
}
