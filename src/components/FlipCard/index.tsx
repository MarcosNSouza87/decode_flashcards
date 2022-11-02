import React from 'react';
import {Pressable} from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';

import {Card} from '../Card';

type Props = {
  data: {
    id: string;
    front: string;
    back: string;
  };
};

export function FlipCard({data}: Props) {
  const flipPosition = useSharedValue(0);

  const frontCardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(flipPosition.value, [0, 1], [0, 180])}deg`,
        },
      ],
    };
  });
  const backCardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(flipPosition.value, [0, 1], [180, 360])}deg`,
        },
      ],
    };
  });

  const handleFlipCard = () => {
    const newValue = flipPosition.value === 0 ? 1 : 0;
    flipPosition.value = withTiming(newValue, {duration: 500});
  };
  return (
    <Pressable onPress={handleFlipCard}>
      <Card label={data.front} style={frontCardAnimatedStyle} />
      <Card label={data.back} style={[styles.back, backCardAnimatedStyle]} />
    </Pressable>
  );
}
