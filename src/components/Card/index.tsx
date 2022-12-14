import React from 'react';
import {Text, ViewProps} from 'react-native';

import {styles} from './styles';
import Animated from 'react-native-reanimated';
type Props = ViewProps & {
  label: string;
};

export function Card({label, style}: Props) {
  return (
    <Animated.View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
    </Animated.View>
  );
}
