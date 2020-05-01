import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Constants from 'expo-constants';

import Colors from '../constants/Colors';
import logo from '../assets/images/logo.png';

export default function BeforeLogin() {
    const navigation = useNavigation();

    function login() {
       navigation.navigate('Login');
    }

    function cadastro() {
       navigation.navigate('SignUp');
    }

    return (
        <View style = { styles.container }>
            <Image source={ logo } style={{ alignSelf: "center", justifyContent: "center" }} />
            <View style={{ 
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                position: 'absolute',
                bottom: 37
            }}>
                <Button 
                    onPress = { login }
                    containerViewStyle = {{
                        alignContent: "center",
                        width: 156.03,
                        height: 49
                    }}
                    buttonStyle = {{ 
                        borderColor: Colors.pdmAmarelo, 
                        backgroundColor: Colors.pdmAmarelo,
                        display: "flex" ,
                        paddingHorizontal: 50.93,
                        paddingVertical: 14.67,
                    }}
                    color = { Colors.pdmRoxo1 }
                    rounded
                    title = "LOGIN"
                    accessibilityLabel = "Ir para a tela de login"
                />
                <Button 
                    onPress = { cadastro }
                    type = "outline"
                    containerViewStyle = {{
                        width: 156.03,
                        height: 49,
                        alignContent: "center",
                        borderStyle: "solid",
                        borderRadius: 100,
                        borderWidth: 4,
                        borderColor: Colors.pdmAmarelo,
                        flex: 1
                    }}
                    buttonStyle = {{ 
                        display: "flex",
                        backgroundColor: Colors.pdmRoxo1, 
                        paddingHorizontal: 19,
                        paddingVertical: 10
                    }}
                    rounded
                    color = { Colors.pdmAmarelo }
                    title = "CADASTRAR"
                    accessibilityLabel = "Ir para a tela de cadastro"
                /> 
            </View>
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
    }
});