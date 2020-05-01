import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import SideSwipe from 'react-native-sideswipe';
import { Button, ButtonGroup } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import '@expo/vector-icons';

import Colors from '../constants/Colors';
import imagemFundo from '../assets/images/dinheiro.png';


export default function AppPresentation() {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    
    const { width, height } = Dimensions.get('window');
    const slides = 
    [
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

    const buttons = ['', '', '']
    const navigation = useNavigation();

    function comecar() {
        navigation.navigate('BeforeLogin');
    }

    return (
        <View style = { styles.container }>
            {
            /* <ImageBackground source = { imagemFundo }/>
            <LinearGradient
                colors={['#441380', 'rgba(68, 19, 128, 0.76)']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    width: width,
                    height : height
                }}
            /> */
            }
            <Button
                onPress = { setCurrentIndex(2) }
                containerStyle = {{
                    width: 180,
                    borderColor: Colors.pdmAmarelo
                }}
                buttonStyle = {{ borderColor: Colors.pdmAmarelo }}
                color = { Colors.pdmAmarelo }
                disabled = { currentIndex == 2 }
                disabledStyle = {{
                    display: "none"
                }}
                type = "outline"
                title = "PULAR PARA O FINAL"
                accessibilityLabel = "Pular a apresentação do aplicativo"
            />
            <SideSwipe
                index = { currentIndex }
                itemWidth = { width }
                style = {{ width }}
                data = { slides }
                threshold = { 120 }
                contentOffset = { 20 }
                onIndexChange = { index =>
                    setCurrentIndex(index)
                }
                renderItem = {({ item }) => (
                    <View style = {{ width: width, paddingHorizontal: 10 }}>
                        <Text style = { styles.tituloCarrossel }>
                            { item.titulo }
                        </Text>
                        <Text style = { styles.descricaoCarrossel }>
                            { item.descricao }
                        </Text>
                        <ButtonGroup
                            selectedIndex = { currentIndex }
                            buttons = { buttons }
                            containerStyle = {{ 
                                height: 12,
                                width: 124,
                                alignSelf: "center",
                                backgroundColor: Colors.pdmRox,
                                borderColor: Colors.pdmRoxo
                            }}
                            buttonStyle = {{
                                backgroundColor: '#665105',
                                marginRight: 17,
                                width: 30
                            }}
                            selectedButtonStyle = {{
                                backgroundColor: Colors.pdmAmarelo, 
                                marginLeft: 17,
                                width: 30
                            }}
                        />
                        <Button 
                            onPress = { comecar }
                            containerStyle = {{
                                width: 180,
                                borderColor: Colors.pdmAmarelo
                            }}
                            buttonStyle = {{ borderColor: Colors.pdmAmarelo }}
                            color = { Colors.pdmAmarelo }
                            disabled = { currentIndex != 2 }
                            disabledStyle = {{
                                display: "none"
                            }}
                            type = "outline"
                            title = "COMEÇAR"
                            accessibilityLabel = "Começar a utilizar o aplicativo"
                        />
                    </View>
                )}
            />
        </View>
    );
};

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
  