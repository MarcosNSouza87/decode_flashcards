import React from 'react';
import {Pressable, PressableProps, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';
import {COLORS} from '../../Global/theme';

type Props = PressableProps & {
  size?: 'small' | 'large';
  color?: 'primary' | 'secondary';
  icon: string;
};

export function Button({
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
          size={size === 'small' ? 32 : 44}
          color={color === 'primary' ? COLORS.VIOLET : COLORS.WHITE}
        />
      </View>
    </Pressable>
  );
}
