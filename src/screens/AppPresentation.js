import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import Constants from 'expo-constants';
import SideSwipe from 'react-native-sideswipe';
import { Button, ButtonGroup } from 'react-native-elements';
import '@expo/vector-icons';
import Colors from '../constants/Colors';

const { width } = Dimensions.get('window');
const slides = [
    {
        titulo: "Controle financeiro",
        descricao: "Entenda como você gasta seu dinheiro, monitore suas economias, e planeje investimentos."
    },
    {
        titulo: "Educação financeira",
        descricao: "Aprenda sobre finanças de forma simples e cativante com nossos tutoriais. "
    },
    {
        titulo: "E prêmios!",
        descricao: "Faça tudo isso com diversão através do nosso sistema de recompensas: suas moedas acumuladas aqui dentro são trocadas por produtos lá fora."
    }
];

export default class AppPresentation extends Component {
    state = {
        currentIndex: 0,
    };

    render = () => {
        const buttons = ['', '', '']
        return (
            <View style={styles.container}>
                <Button
                    containerStyle={{
                        width: 180,
                        borderColor: Colors.pdmAmarelo
                    }}
                    disabled={this.state.currentIndex == 2}
                    disabledStyle={{
                        display: "none"
                    }}
                    type="outline"
                    title="PULAR PARA O FINAL"
                    accessibilityLabel="Pular a apresentação do aplicativo"
                />
                <SideSwipe
                    index={this.state.currentIndex}
                    itemWidth={width}
                    style={{ width }}
                    data={slides}
                    threshold={120}
                    contentOffset={20}
                    onIndexChange={index =>
                        this.setState(() => ({ currentIndex: index }))
                    }
                    renderItem={({ item }) => (
                        <View style={{ width: width, paddingHorizontal: 10 }}>
                            <Text style={ styles.tituloCarrossel }>
                                {item.titulo}
                            </Text>
                            <Text style={ styles.descricaoCarrossel }>
                                {item.descricao}
                            </Text>
                            <ButtonGroup
                                onPress = { this.updateIndex }
                                selectedIndex = { this.state.currentIndex }
                                buttons ={ buttons }
                                containerStyle ={{ 
                                    height: 12,
                                    width: 124,
                                    alignSelf: "center",
                                    backgroundColor: Colors.pdmRox,
                                    borderColor: Colors.pdmRoxo
                                }}
                                buttonStyle = {{
                                    backgroundColor: '#665105',
                                    marginLeft: 17,
                                    width: 30
                                }}
                                selectedButtonStyle = {{
                                    backgroundColor: Colors.pdmAmarelo, 
                                    marginLeft: 17
                                }}
                            />
                        </View>
                    )}
                />
            </View>
        );
    };
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,      
      backgroundColor: Colors.pdmRoxo
    },
    tituloCarrossel: {
      color: Colors.pdmAmarelo,
      fontSize: 48.4286,
      lineHeight: 56,
      width: 312.1,
      height: 113,
      marginTop: 59,
      marginBottom: 60,
      alignItems: "center",
      textTransform: "uppercase"
    },
    descricaoCarrossel: {
      width: 342,
      height: 132,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 24,
      lineHeight: 33,
      display: "flex",
      alignItems: "center",
      color: '#FFFFFF',
      marginBottom: 100
    }
});
  