import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import SideSwipe from 'react-native-sideswipe';
import { Button, ButtonGroup } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import '@expo/vector-icons';

import Colors from '../constants/Colors';

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
            <ImageBackground source={require('../assets/images/dinheiro.png')} style={styles.backgroundImage}>
                <LinearGradient 
                colors={['rgba(34, 10, 64, 1)', 
                        'rgba(34, 10, 64, 0.8)', 
                        'rgba(34, 10, 64, 0.7)', 
                        'rgba(34, 10, 64, 0.6)', 
                        'rgba(34, 10, 64, 0.5)', 
                        'rgba(34, 10, 64, 0.5)', 
                        'rgba(34, 10, 64, 0.5)']} 
                locations={[0, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
                start={{ x: 0, y: 0.1 }}
                end={{ x: 0, y: 1 }}               
                style={styles.linearGradient}>
                    <Button
                        onPress = { () => {
                            if(currentIndex != 2) setCurrentIndex(2) 
                        }}
                        containerStyle = {{
                            width: 180,
                            backgroundColor: Colors.pdmAmarelo,
                        }}
                        containerViewStyle = {{
                            backgroundColor: currentIndex == 2 ? Colors.pdmRoxo : Colors.pdmAmarelo,
                            borderRadius: 25,
                            padding: 2,
                        }}
                        buttonStyle = {{ 
                            backgroundColor: Colors.pdmRoxo,
                            borderRadius: 73.0646,
                        }}
                        color = { Colors.pdmAmarelo }
                        disabled = { currentIndex == 2 }
                        disabledStyle = {{
                            backgroundColor: Colors.pdmRoxo,
                        }}
                        disabledTextStyle = {{
                            color: Colors.pdmRoxo,
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
                                <Text style = { currentIndex != 2 ? styles.tituloCarrossel1 : styles.tituloCarrossel2 }>
                                    { item.titulo }
                                </Text>
                                <Text style = { currentIndex != 2 ? styles.descricaoCarrossel1 : styles.descricaoCarrossel2 }>
                                    { item.descricao }
                                </Text>                       
                            </View>
                        )}
                    />
                    <ButtonGroup
                        selectedIndex = { currentIndex }
                        buttons = { buttons }
                        containerStyle = {{ 
                            height: 12,
                            width: 124,
                            marginBottom: 15,
                            borderColor: Colors.pdmAmarelo,
                        }}
                        buttonStyle = {{
                            backgroundColor: '#665105',
                            width: 40,
                            alignSelf: "center",
                        }}
                        innerBorderStyle = {{color: Colors.pdmAmarelo}}
                        selectedButtonStyle = {{
                            backgroundColor: Colors.pdmAmarelo, 
                            width: 40,
                            alignSelf: "center",
                        }}
                    />
                    <Button 
                        onPress = { comecar }
                        containerViewStyle = {{
                            width: 136,
                            alignSelf: "center",
                        }}
                        buttonStyle = {{ 
                            backgroundColor: Colors.pdmAmarelo,
                            borderRadius: 73.0646,
                        }}
                        textStyle = {{
                            fontWeight: "bold",
                            fontSize: 14,
                        }}
                        color = { Colors.pdmRoxo }
                        disabled = { currentIndex != 2 }
                        disabledStyle = {{
                            display: "none"
                        }}
                        type = "outline"
                        title = "COMEÇAR"
                        accessibilityLabel = "Começar a utilizar o aplicativo"
                    />
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight + 10,    
      backgroundColor: Colors.pdmRoxo,
    },
    backgroundImage: {
      flex: 1,
      alignItems: 'center',  
      width: null,
      height: null,
    },
    linearGradient: {
      flex: 1,
      alignItems: 'center',
      height: null,
      width: null,
    },
    tituloCarrossel1: {
      color: Colors.pdmAmarelo,
      fontSize: 40,
      fontWeight: "bold",
      lineHeight: 56,
      width: 312.1,
      height: 113,
      marginTop: 50,
      marginBottom: 40,
      alignItems: "center",
      textTransform: "uppercase"
    },
    tituloCarrossel2: {
      color: Colors.pdmAmarelo,
      fontSize: 40,
      fontWeight: "bold",
      lineHeight: 56,
      width: 312.1,
      height: 113,
      marginTop: 50,
      marginBottom: 0,
      alignItems: "center",
      textTransform: "uppercase"
    },
    descricaoCarrossel1: {
      width: 280,
      height: 160,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 17,
      lineHeight: 33,
      display: "flex",
      alignItems: "center",
      color: '#FFFFFF',
      marginBottom: 30,
    },
    descricaoCarrossel2: {
      width: 280,
      height: 160,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 17,
      lineHeight: 33,
      display: "flex",
      alignItems: "center",
      color: '#FFFFFF',
      marginBottom: 70,
    },
});
  