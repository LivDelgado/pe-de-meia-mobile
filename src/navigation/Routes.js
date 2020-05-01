import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import AppPresentation from '../screens/AppPresentation';
const Stack = createStackNavigator();

export default function Routes({ containerRef, initialNavigationState }) {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AppPresentation" component={AppPresentation} />
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
});