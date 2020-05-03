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
            descricao: "O primeiro deles é o entendimento de ganhos e gastos, etapa essencial para o desenvolvimento dos outros três pilares: desendividamento, economia e investimento. Contudo, se você não é muito fã de finanças e frita a cabeça só de ouvir essas palavras, não se preocupe."
        },
        {
            descricao: "Demos o nosso melhor para deixar o conteúdo super leve e ficamos muito felizes em poder ajudar. Sendo assim, te aconselhamos: “Não desista! Estaremos ao seu lado nessa jornada.”. Dito isto, gostaria de iniciar no aplicativo com os nossos tutoriais?"
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
            
            <LinearGradient
                colors={['#441380', 
                        '#53179b', 
                        '#5e1bb1', 
                        '#6a1ec8']} 
                locations={[0, 0.7, 0.8, 1]}
                style={ styles.linearGradient }
            >
            
            <Button
                onPress = { () => {
                    if(currentIndex != 2) setCurrentIndex(2) 
                }}
                containerStyle = {{
                    width: 180,
                    backgroundColor: Colors.pdmAmarelo,
                }}
                containerViewStyle = {{
                    backgroundColor: currentIndex == 2 ? '#441380' : Colors.pdmAmarelo,
                    borderRadius: 25,
                    padding: 2,
                }}
                buttonStyle = {{ 
                    backgroundColor: '#441380',
                    borderRadius: 73.0646,
                }}
                color = { Colors.pdmAmarelo }
                disabled = { currentIndex == 2 }
                disabledStyle = {{
                    backgroundColor: '#441380',
                }}
                disabledTextStyle = {{
                    color: '#441380',
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
                    </View>
                )}
            />
            <ButtonGroup
                selectedIndex = { currentIndex }
                buttons = { buttons }
                containerStyle = {{ 
                    height: 12,
                    width: 124,
                    borderColor: Colors.pdmRoxo,
                    borderWidth: 1.5,
                    marginBottom: 20,
                }}
                buttonStyle = {{
                    backgroundColor: '#441380',
                    width: 40,
                    alignSelf: "center",
                }}
                innerBorderStyle = {{color: Colors.pdmRoxo}}
                selectedButtonStyle = {{
                    backgroundColor: '#5F1AB2', 
                    width: 40,
                    alignSelf: 'center',
                }}
            />
            <Button 
                onPress = { comecar }
                containerViewStyle = {{
                    width: 300,
                    alignSelf: "center",
                }}
                buttonStyle = {{ 
                    backgroundColor: Colors.pdmAmarelo,
                    borderRadius: 73.0646,
                    marginBottom: 10,
                }}
                textStyle = {{
                    fontWeight: "bold",
                    fontSize: 12,
                }}
                color = { '#220A40' }
                disabled = { currentIndex != 2 }
                disabledStyle = {{
                    display: "none"
                }}
                title = "SIM, QUERO VIVER A EXPERIÊNCIA COMPLETA!"
                accessibilityLabel = "Sim, quero viver a experiência completa!"
            />
            <Button 
                onPress = { pularTutorial }
                containerStyle = {{
                    width: 180,
                    backgroundColor: Colors.pdmAmarelo
                }}
                containerViewStyle = {{
                    backgroundColor: currentIndex != 2 ? '#5F1AB2' : Colors.pdmAmarelo,
                    borderRadius: 25,
                    padding: 2,
                }}
                buttonStyle = {{ 
                    backgroundColor: '#5e1bb1',
                    borderRadius: 73.0646,
                    width: 180,
                }}
                textStyle = {{
                    fontSize: 12,
                }}
                color = { Colors.pdmAmarelo }
                disabled = { currentIndex != 2 }
                disabledStyle = {{
                    display: "none"
                }}
                type = "outline"
                title = "AGORA NÃO"
                accessibilityLabel = "Não fazer o tutorial"
            />
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,      
      backgroundColor: '#441380',
    },
    linearGradient: {
      flex: 1,
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight - 15,
      height: null,
      width: null,
    },
    descricaoCarrossel: {
      width: 280,
      height: 280,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 15,
      lineHeight: 33,
      display: "flex",
      alignItems: "center",
      color: '#FFFFFF',
      marginTop: 30,
      marginBottom: 30,
    }
});
  