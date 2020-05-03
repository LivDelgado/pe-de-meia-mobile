import React, { useState } from 'react';
import { 
    View,
    ScrollView,
    StyleSheet,
    Text,
    Picker,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { BarChart } from 'react-native-chart-kit';
import Colors from '../constants/Colors';

const DATA = [
    {
      id: '1',
      title: 'Delivery de Comidaaaaaaaaaaaaaaaaaaaaaaaa',
      subtitle: 'Hambúrgueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer',
      type: 'despesa',
      date: '08/05/2020',
      value: 29000.10
    },
    {
      id: '2',
      title: 'Salário',
      subtitle: 'Hambúrguer',
      type: 'receita',
      date: '08/05/2020',
      value: 29.10
    },
    {
      id: '3',
      title: 'Poupança',
      subtitle: 'Guardando',
      type: 'transferência',
      date: '08/05/2020',
      value: 29.10
    },
    {
        id: '4',
        title: 'tesouro direto',
        subtitle: 'Investimento',
        type: 'investimento',
        date: '08/05/2020',
        value: 290.10
      },
];
  
function Item({ id, title, subtitle, type, date, value, selected, onSelect }) {
    function getValueColor(type){
        switch(type){
            case 'despesa':
                return '#E50000';
            case 'receita': 
                return '#00B21D';
            default:
                return '#009EFF';
        }
    }

    return (
        <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
            styles.item,
            { backgroundColor: selected ? 'F3F3F3' : '#F2F2F2' },
        ]}
        >
        <View >
            <Text style={styles.title}> {title} </Text>
            <View style={styles.financeView}>
                <View style={styles.financesText}>
                    <Text style={styles.subtitle}> {subtitle} </Text>
                    <Text style={styles.date}> {date} </Text>
                </View>
                <View style={styles.financeValue}>
                    <Text style={{
                    fontSize: 24,
                    color: getValueColor(type),
                    fontFamily: 'roboto-bold'
                    }}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)} </Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
}

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

    const [selected, setSelected] = useState(new Map());

    const onSelect = React.useCallback(
        id => {
        const newSelected = new Map(selected);
        newSelected.set(id, !selected.get(id));

        setSelected(newSelected);
        },
        [selected],
    );

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
            <ScrollView
                contentContainerStyle={{
                    justifyContent: 'center',
                    marginHorizontal: 0
                }}
            >
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
                    <View style={ styles.chartsContainer }>
                        <BarChart
                            data={{
                                labels: [
                                'January',
                                'February',
                                'March',
                                'April',
                                'May',
                                'June',
                                ],
                                datasets: [
                                {
                                    data: [20, 45, 28, 80, 99, 43],
                                },
                                ],
                            }}
                            width={ Dimensions.get('screen').width * 0.8 }
                            height={110}
                            yAxisLabel={'R$'}
                            chartConfig={{
                                backgroundColor: 'transparent',
                                backgroundGradientFrom: '#f2f2f2',
                                backgroundGradientTo: '#f2f2f2',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(54, 15, 102, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                        />
                    </View>
                </View>
                <View>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            type={item.type}
                            date={item.date}
                            value={item.value}
                            selected={!!selected.get(item.id)}
                            onSelect={onSelect}
                        />
                        )}
                        keyExtractor={item => item.id}
                        extraData={selected}
                    />
                </View>
            </ScrollView>
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
        alignSelf: 'center',
        marginBottom: 10,
        justifyContent: 'space-evenly'
    },
    chartsViewButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center'
    }, 
    chartsContainer: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    financeView: {
        display: "flex",
        flexDirection: "row",
        minHeight: 90
    },
    financesText: {
        flex: 2,
        maxWidth: '50%'
    },
    financeValue: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'flex-end'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        color: '#360F66',
        fontFamily: 'roboto-bold',
        textTransform: 'uppercase'
    },
    subtitle: {
        fontSize: 14,
        color: '#999999',
        marginVertical: 5,
        fontFamily: 'roboto-regular'
    },
    date: {
        fontSize: 18,
        color: '#999999',
        fontFamily: 'roboto-bold'
    }
});