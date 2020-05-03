import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Constants from 'expo-constants';

import Colors from '../constants/Colors';
import logo from '../assets/images/logo.png';

export default function GameProgressDashboard() {
    const navigation = useNavigation();

    return (
        <View style = { styles.container }>
            <Text style={{fontSize: 50, color: '#FFF'}}>DASHBOARD DE PROGRESSO NO JOGO</Text>
            <Image source={ logo } style={{ alignSelf: "center", justifyContent: "center" }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,      
      backgroundColor: Colors.pdmRoxo1,
      justifyContent: "space-evenly"
    }
});