import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

export default function TabApp({containerRef, initialNavigationState}) {
  return (
    <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}