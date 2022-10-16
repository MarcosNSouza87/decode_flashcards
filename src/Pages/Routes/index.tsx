import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Pages from '..';
import {StatusBar} from 'react-native';

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={Pages.Home} />
        <Stack.Screen name="ReviewListCard" component={Pages.ReviewList} />
        <Stack.Screen name="ReviewFormCard" component={Pages.ReviewForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
