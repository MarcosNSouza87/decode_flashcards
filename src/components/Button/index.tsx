import React from 'react';
import {Pressable, PressableProps, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';
import {COLORS} from '../../Global/theme';

type Props = PressableProps & {
  title?: string;
  size?: 'small' | 'large' | 'text';
  color?: 'primary' | 'secondary' | 'danger';
  icon: string;
};

export function Button({
  title,
  size = 'small',
  color = 'primary',
  icon,
  ...rest
}: Props) {
  return (
    <Pressable {...rest}>
      <View style={[styles.container, styles[size], styles[color]]}>
        <Icon
          name={icon}
          size={size === 'small' ? 32 : size === 'large' ? 44 : 50}
          color={
            color === 'primary'
              ? COLORS.VIOLET
              : color === 'secondary'
              ? COLORS.WHITE
              : COLORS.RED
          }
        />
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
    </Pressable>
  );
}
