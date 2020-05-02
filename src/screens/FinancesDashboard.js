import React, { useState } from 'react';
import { View, StyleSheet, Text, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
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
    const [timePeriod, setTimePeriod] = useState('Semana');

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
            <View style = { styles.graphView }>
                <Text>Gráfico</Text>
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
      backgroundColor: Colors.pdmRoxo1,
      justifyContent: "space-between"
    },
    graphView: {
        marginHorizontal: 16,
        backgroundColor: Colors.pdmBrancoAcinzentado
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
    }
});