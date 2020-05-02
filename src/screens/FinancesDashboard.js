import React, { useState } from 'react';
import { View, StyleSheet, Text, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, ButtonGroup } from 'react-native-elements';
import Constants from 'expo-constants';

import Colors from '../constants/Colors';

export default function FinancesDashboard() {
    const navigation = useNavigation();

    const timePeriodList = [
        {
            value: 1,
            description: 'SEMANA'
        },
        {
            value: 2,
            description: 'MÊS'
        },
        {
            value: 3,
            description: 'ANO'
        },
    ];
    const [timePeriod, setTimePeriod] = useState(timePeriodList[0].description);

    const chartsInfoTypesList = ['RECEITA', 'DESPESA'];
    const [chartsInfoType, setchartsInfoType] = useState(chartsInfoTypesList[0])
    const [ currentIndex, setCurrentIndex ] = useState(0);

    return (
        <View style = { styles.container }>
            <View style={ styles.pickerView }>
                <Picker
                    style={ styles.timePeriodPicker }
                    selectedValue={ timePeriod }
                    onValueChange={(itemValue) => setTimePeriod(itemValue)}
                >
                    <Picker.Item label={timePeriodList[0].description} value={timePeriodList[0].value} />
                    <Picker.Item label={timePeriodList[1].description} value={timePeriodList[1].value} />
                    <Picker.Item label={timePeriodList[2].description} value={timePeriodList[2].value} />
                </Picker>
            </View>
            <View style = { styles.chartsView }>
                <View style={ styles.chartsViewButtons }>
                    <Button 
                        onPress = { () => {if (chartsInfoType != chartsInfoTypesList[0]) setchartsInfoType(chartsInfoTypesList[0]);} }
                        containerViewStyle = {{
                            alignContent: "center",
                            width: '42%'
                        }}
                        buttonStyle = {{
                            borderRadius: 6.7,
                            backgroundColor: chartsInfoType == chartsInfoTypesList[0] ? '#26ACFF' : 'transparent',
                            display: "flex",
                            maxHeight: 33,                    
                            borderStyle: "solid",
                            borderWidth: 2.7,
                            borderColor: '#26ACFF',
                            flex: 1,
                        }}
                        color = {chartsInfoType == chartsInfoTypesList[0] ? 'white' : '#26ACFF'}
                        title = "RECEITA"
                        accessibilityLabel = "Exibir o gráfico de receitas"
                    />
                    <Button 
                        onPress = { () => {if (chartsInfoType != chartsInfoTypesList[1]) setchartsInfoType(chartsInfoTypesList[1]);} }
                        type = "outline"
                        containerViewStyle = {{
                            alignContent: "center",
                            width: '42%'
                        }}
                        buttonStyle = {{
                            borderRadius: 6.7,
                            backgroundColor: chartsInfoType == chartsInfoTypesList[1] ? '#26ACFF' : 'transparent',
                            display: "flex" ,
                            maxHeight: 33,
                            borderStyle: "solid",
                            borderWidth: 2.7,
                            borderColor: '#26ACFF',
                            flex: 1,
                        }}
                        color = {chartsInfoType == chartsInfoTypesList[1] ? 'white' : '#26ACFF'}
                        title = "DESPESA"
                        accessibilityLabel = "Exibir o gráfico de despesas"
                    /> 
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 0,
      marginTop: 0,
      backgroundColor: Colors.pdmRoxo1
    },
    pickerView: {
        margin: 0,
        padding: 0,
        width: '100%',
        backgroundColor: '#135680',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    timePeriodPicker: {
        color: '#FFF',
        width: '60%',
        borderStyle: 'solid',
        borderWidth: 2.7,
        borderColor: '#FFF'
    },
    chartsView: {
        marginTop: 16,
        padding: 20,
        width: '90%',
        backgroundColor: Colors.pdmBrancoAcinzentado,
        minHeight: 220,
        borderRadius: 10,
        justifyContent: 'space-evenly'
    },
    chartsViewButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center'
    },
});