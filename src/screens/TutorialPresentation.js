import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import SideSwipe from 'react-native-sideswipe';
import { Button, ButtonGroup } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import '@expo/vector-icons';

import Colors from '../constants/Colors';


export default function TutorialPresentation() {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ modalVisible, setModalVisible ] = useState(false);
    
    const { width, height } = Dimensions.get('window');
    const slides = 
    [
        {
            descricao: "Buscando introduzir pessoas ao mundo do controle financeiro e incentivá-las a colocá-lo em prática nas suas vidas, nós preparamos um conteúdo especial que engloba os princípios da educação financeira. Na nossa metodologia, esses princípios são firmados em quatro pilares."
        },
        {
            descricao: "O primeiro deles é o entendimento de ganhos e gastos, etapa essencial para o desenvolvimento dos outros três pilares: desendividamento, economia e investimento. Contudo, se você não é muito fã de finanças e frita a cabeça só de ouvir essas palavras, não se preocupe. Demos o nosso melhor para deixar o conteúdo super leve e ficamos muito felizes em poder ajudar."
        },
        {
            descricao: "Sendo assim, te aconselhamos: “Não desista! Estaremos ao seu lado nessa jornada.”. Dito isto, gostaria de iniciar no aplicativo com os nossos tutoriais?"
        }
    ];

    const buttons = ['', '', '']
    const navigation = useNavigation();

    function comecar() {
        navigation.navigate('BeforeLogin');
    }

    function pularTutorial() {
        setModalVisible(true);
    }

    return (
        <View style = { styles.container }>
            {
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
            />
            }
            <Button
                onPress = { () => {
                    if(currentIndex != 2) setCurrentIndex(2) 
                }}
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
                accessibilityLabel = "Pular a apresentação do tutorial"
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
                                backgroundColor: '#5F1AB2',
                                marginRight: 17,
                                width: 30
                            }}
                            selectedButtonStyle = {{
                                backgroundColor: '#5F1AB2', 
                                marginLeft: 17,
                                width: 30
                            }}
                        />
                        <Button 
                            onPress = { comecar }
                            containerStyle = {{
                                width: 342,
                            }}
                            buttonStyle = {{ 
                                backgroundColor: Colors.pdmAmarelo,
                                paddingHorizontal: 23,
                                paddingVertical: 15
                            }}
                            color = { '#220A40' }
                            disabled = { currentIndex != 2 }
                            disabledStyle = {{
                                display: "none"
                            }}
                            title = "SIM, QUERO VIVER A EXPERIÊNCIA COMPLETA"
                            accessibilityLabel = "Sim, quero viver a experiência completa!"
                        />
                        <Button 
                            onPress = { pularTutorial }
                            containerStyle = {{
                                width: 180,
                                borderColor: Colors.pdmAmarelo
                            }}
                            buttonStyle = {{ borderColor: '#441380' }}
                            color = { '#5F1AB2' }
                            disabled = { currentIndex != 2 }
                            disabledStyle = {{
                                display: "none"
                            }}
                            type = "outline"
                            title = "AGORA NÃO"
                            accessibilityLabel = "Não fazer o tutorial"
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
      justifyContent: "space-evenly"
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
  