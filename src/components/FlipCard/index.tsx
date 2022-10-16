import React from 'react';
import {Pressable} from 'react-native';

import {Card} from '../Card';
import {styles} from './styles';

type Props = {
  data: {
    id: string;
    front: string;
    back: string;
  };
};

export function FlipCard({data}: Props) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const handlePress = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <Pressable onPress={handlePress}>
      {isFlipped ? <Card label={data.front} /> : <Card label={data.back} />}
    </Pressable>
  );
}
