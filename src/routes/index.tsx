import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Pages from '../pages';
import {StatusBar} from 'react-native';
import {UploadProvider} from '../context/uploadContext';
import {Header} from '../components/Header';

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <UploadProvider>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={'transparent'}
        />
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            header: ({route, navigation}) => (
              <Header route={route} navigation={navigation} />
            ),
          }}>
          <Stack.Screen name="Start" component={Pages.Home} />
          <Stack.Screen name="ReviewListCard" component={Pages.ReviewList} />
          <Stack.Screen name="ReviewFormCard" component={Pages.ReviewForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </UploadProvider>
  );
}
