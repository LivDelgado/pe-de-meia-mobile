import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Constants from 'expo-constants';

import Colors from '../constants/Colors';
import Card from '../components/Card';

export default function Accounts() {
    const navigation = useNavigation();

    return (
        <View style = { styles.container }>

            <Card>
                <Text style={styles.titleText}>ADICIONE UMA NOVA CONTA E SEUS DADOS</Text>

                <View style={styles.body}>

                    <Text style={styles.bodyText}>SALDO DA CONTA: </Text>
                    <View style={styles.currency}>
                        <Text style={styles.currencyBodyText}>R$: </Text>
                        <TextInput style={styles.inputStyle}/>
                    </View>
                    
                </View>

            </Card>

        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
       fontSize: 15,
       color: '#999999',
    },
    body: {        
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    currency:{
        alignItems: "center",
        marginTop: 16,
        flexDirection: 'row', 
    },
    currencyBodyText: {
        fontSize: 40,
        color: '#5F1AB2',
        fontWeight: 'bold',
    },
    bodyText: {
        fontSize: 15,
        color: '#5F1AB2',
        textAlign: 'right',
    },
    inputStyle: {
        minHeight: 50,
        minWidth: '80%',
        borderColor: '#5F1AB2',
        borderWidth: 2,
        borderRadius: 10,
        fontFamily: "Roboto",
        fontSize: 15,
        color: '#5F1AB3'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,      
      backgroundColor: Colors.pdmRoxo1,
      justifyContent: "space-evenly"
    }
});