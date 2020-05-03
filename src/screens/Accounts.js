import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Constants from 'expo-constants';

import Colors from '../constants/Colors';
import Card from '../components/Card';

export default function Accounts() {
    const navigation = useNavigation();

    const bankList = [
        {
            value: 1,
            description: 'SELECIONE UM BANCO'
        },
        {
            value: 2,
            description: 'CAIXA ECONOMICA FEDERAL'
        },
        {
            value: 3,
            description: 'ITAU UNIBANCO S.A.'
        },
        {
            value: 4,
            description: 'BADRESCO S.A.'
        },
        {
            value: 5,
            description: 'BANCO DO BRASIL S.A.'
        },
        {
            value: 6,
            description: 'NU PAGAMENTOS S.A.'
        },
        {
            value: 7,
            description: 'INTER S.A.'
        },
    ];

    const accountTypeList = [
        {
            value: 1,
            description: 'SELECIONE O TIPO DE CONTA'
        },        
        {
            value: 2,
            description: 'CONTA CORRENTE'
        },
        {
            value: 3,
            description: 'CONTA POUPANÇA'
        },
        {
            value: 4,
            description: 'CONTA SALÁRIO'
        },
    ];

    const [bank, setBank] = useState(bankList[0].description);
    const [accountType, setAccountType] = useState(accountTypeList[0].description);

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

                    <Text></Text>

                    <View style={styles.pickerView}>
                        <Picker
                            style={ styles.picker }
                            selectedValue={ bank }
                            onValueChange={(itemValue) => setBank(itemValue)}>{
                        
                            bankList.map( (v)=>{
                                return <Picker.Item label={v.description} value={v.value} />
                            })}
                        </Picker>
                    </View>

                    <Text></Text>

                    <View style={styles.pickerView}>
                        <Picker
                            style={ styles.picker }
                            selectedValue={ accountType }
                            onValueChange={(itemValue) => setAccountType(itemValue)}>{
                        
                            accountTypeList.map( (v)=>{
                                return <Picker.Item label={v.description} value={v.value} />
                            })}
                        </Picker>
                    </View>

                    <Text></Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={6}
                        style={styles.inputStyle}/>
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
        fontWeight: 'bold',
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
    pickerView: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 2.7,
        borderColor: '#5F1AB2'
    },
    picker: {
        color: '#5F1AB2',
        width: '100%',        
    },
});