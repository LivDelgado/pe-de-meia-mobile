import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import AppPresentation from '../screens/AppPresentation';
import BeforeLogin from '../screens/BeforeLogin';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import TutorialPresentation from '../screens/TutorialPresentation';
const Stack = createStackNavigator();

export default function Routes({ containerRef, initialNavigationState }) {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AppPresentation" component={AppPresentation} />
            <Stack.Screen name="BeforeLogin" component={BeforeLogin} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="TutorialPresentation" component={TutorialPresentation} />
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