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
                <Text style={[styles.font, styles.cardHeaderTitle]}>ADICIONE UMA NOVA CONTA E SEUS DADOS</Text>

                <View style={styles.cardBody}>

                    <Text style={[styles.font, styles.title]}>SALDO DA CONTA: </Text>
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
                        numberOfLines={5}
                        style={styles.textareaStyle}/>

                    <Text></Text>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <View style={styles.iconStyle}>
                            <Icon name={'add'} size={30} color={'#fff'} />
                        </View>                    
                        
                        <View style={styles.textButton}>
                            <Text style={[styles.font, styles.textStyle]}> ADICIONAR NOVA CONTA </Text>
                        </View>                        
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
        paddingTop: 30,
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        width:250,
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        color: '#5F1AB2',
        textAlign: 'right',
        paddingBottom: 10,
    },
    currency:{
        flexDirection: 'row',
        alignItems: "center",
    },
    currencyText: {
        fontSize: 30,
        color: '#5F1AB2',
    },    
    inputStyle: {
        height: 45,
        minWidth: '80%',
        borderColor: '#5F1AB2',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily: "Roboto",
        fontSize: 15,
        color: '#5F1AB3'
    },
    textareaStyle: {
        width: '100%',
        borderColor: '#5F1AB2',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily: "Roboto",
        fontSize: 15,
        color: '#5F1AB3'
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#5F1AB2',
        height: 40,
        width: '100%',
        borderRadius: 5,
        margin: 5,
    },
    iconStyle: {
        backgroundColor: '#5F1AB2',
        height: 40,
        width: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        height: 40,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#5F1AB2',
        fontSize: 14,
    },
});