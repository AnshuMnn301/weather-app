import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './src/pages/Details';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

export default function WeatherApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Country Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
