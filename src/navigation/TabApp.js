import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function TabApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerTitleContainerStyle: {
            paddingVertical: 12
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#26ACFF'
          },
          headerTitleStyle: {
            fontFamily: 'ubuntu-bold',
            alignSelf: 'center' ,
            textAlign: 'center',
            fontSize: 18,
            flex: 1
          },
          headerLayoutPreset: 'center',
          headerTintColor: '#360F66',
        }}
      />
    </Stack.Navigator>
  );
}