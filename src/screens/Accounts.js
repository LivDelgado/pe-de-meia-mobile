import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import Icon from "react-native-vector-icons/MaterialIcons";

import Colors from '../constants/Colors';
import Card from '../components/Card';
import Accordian  from '../components/Accordion';

export default function Accounts() {
    const navigation = useNavigation();

    const bankList = {
        title: 'SELECIONE UM BANCO',
        data:[
            {
                key: 'CAIXA ECONOMICA FEDERAL',
                value: false,
                add: false
            },
            {
                key: 'ITAU UNIBANCO S.A.',
                value: false,
                add: false
            },
            {
                key: 'BADRESCO S.A.',
                value: false,
                add: false
            },
            {
                key: 'BANCO DO BRASIL S.A.',
                value: false,
                add: false
            },
            {
                key: 'NU PAGAMENTOS S.A.',
                value: false,
                add: false
            },
            {
                key: 'INTER S.A.',
                value: false,
                add: false
            },
            {
                key: 'ADICIONAR NOVA CONTA',
                value: false,
                add: true
            }
        ]   
    };

    const accountTypeList = {
        title: 'SELECIONE O TIPO DE CONTA',
        data:[
            {
                key: 'CONTA CORRENTE',
                value: false,
                add: false
            },
            {
                key: 'CONTA POUPANÇA',
                value: false,
                add: false
            },
            {
                key: 'CONTA SALÁRIO',
                value: false,
                add: false
            },
            {
                key: 'ADICIONAR NOVO TIPO DE CONTA',
                value: false,
                add: true
            },
        ]
    };

    return (
        <View style = { styles.container }>

            <Card>
                <Text style={styles.cardHeaderTitle}>ADICIONE UMA NOVA CONTA E SEUS DADOS</Text>

                <View style={styles.cardBody}>

                    <Text style={styles.title}>SALDO DA CONTA: </Text>
                    <View style={styles.currency}>
                        <Text style={styles.currencyText}>R$: </Text>
                        <TextInput style={styles.inputStyle}/>
                    </View>

                    <Text/>

                    <Accordian title = {bankList.title} data = {bankList.data}/>

                    <Text/>

                    <Accordian title = {accountTypeList.title} data = {accountTypeList.data}/>

                    <Text/>

                    <TextInput
                        multiline={true}
                        numberOfLines={6}
                        style={styles.inputStyle}/>

                    <Text></Text>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <View style={styles.iconStyle}>
                            <Icon name={'add'} size={30} color={'#fff'} />
                        </View>                        
          
                        <View style={styles.separatorLine} />
                        <Text style={styles.textButton}> ADICIONAR NOVA CONTA </Text>
                    </TouchableOpacity>
                </View>

            </Card>

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
    },
    cardHeaderTitle: {
        fontSize: 15,
        color: '#999999',
    }, 
    cardBody: {        
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        maxWidth: '96%',
    },
    title: {
        fontSize: 15,
        color: '#5F1AB2',
        textAlign: 'right',
    },
    currency:{
        alignItems: "center",
        marginTop: 16,
        flexDirection: 'row',
    },
    currencyText: {
        fontSize: 40,
        color: '#5F1AB2',
    },    
    inputStyle: {
        minHeight: 50,
        minWidth: '80%',
        borderColor: '#5F1AB2',
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: "Roboto",
        fontSize: 15,
        color: '#5F1AB3'
    },
    pickerView: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#5F1AB2'
    },
    picker: {
        color: '#5F1AB2',
        width: '100%',        
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#5F1AB2',
        height: 40,
        width: 220,
        borderRadius: 5,
        margin: 5,
    },
    iconStyle: {
        backgroundColor: '#5F1AB2',
    },
    textButton: {
        color: '#5F1AB2',
        marginBottom: 4,
        marginRight: 20,
    },
    separatorLine: {
        backgroundColor: '#5F1AB2',
        width: 1,
        height: 40,
    },
});