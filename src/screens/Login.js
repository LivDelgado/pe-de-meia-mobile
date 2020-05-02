import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

import Colors from '../constants/Colors';

export default function BeforeLogin() {
    const navigation = useNavigation();

    function voltar() {
        navigation.navigate('BeforeLogin');
    }

    function esqueceuSenha() {
        navigation.navigate('SignUp');
    }

    function cadastrar() {
        navigation.navigate('SignUp');
    }

    function efetuarLogin() {
        // TODO: conexão com a API - fazer login
        navigation.navigate('Root');
    }


    const [emailUser, setEmailUser] = React.useState('Email ou usuário');
    const [senhaPreenchida, isSenhaPreenchida] = React.useState(false);
    const [password, setPassword] = React.useState('Senha');

    return (
        <View style = { styles.container }>
            <Button 
                onPress={ voltar }
                containerViewStyle = {{
                    width: 67.34,
                    height: 24,
                    marginLeft: 32,
                    alignContent: "center",
                    borderStyle: "solid",
                }}
                buttonStyle = {{ 
                    width: 67.34,
                    height: 24,
                    display: "flex",
                    backgroundColor: Colors.pdmRoxo1, 
                    padding: 0
                }}
                color={ Colors.pdmAmarelo }
                leftIcon={{name: 'keyboard-arrow-left'}}
                title='Voltar'
            />
            <Text style={styles.tituloTela}>
                LOGIN
            </Text>
            <Text style={styles.descricaoTela}>
                Como é bom te ver de novo! :D
            </Text>
            <TextInput
                style={styles.inputStyle}
                clearTextOnFocus
                onChangeText={text => setEmailUser(text)}
                value={emailUser}
                maxLength={40}
            />
            <TextInput
                style={styles.inputStyle}
                clearTextOnFocus
                secureTextEntry={senhaPreenchida}
                onChangeText={text => {
                    setPassword(text);
                    isSenhaPreenchida(true);
                }}
                value={password}
                maxLength={15}
            />
            <Button 
                onPress = { esqueceuSenha }
                buttonStyle = {styles.botaoSublinhado}
                color = { Colors.pdmAmarelo }
                title = "Esqueceu sua senha?"
                accessibilityLabel = "Informe se esqueceu sua senha"
            />
            <Button
                onPress = { cadastrar }
                buttonStyle = {styles.botaoSublinhado}
                color = { Colors.pdmAmarelo }
                title = "Ainda não tem uma conta?"
                accessibilityLabel = "Informe se é necessário fazer o cadastro"
            />
            <Button 
                onPress = { efetuarLogin }
                containerStyle = {{
                    flex: 1
                }}
                buttonStyle = {{ 
                    backgroundColor: Colors.pdmAmarelo,
                    borderColor: Colors.pdmAmarelo,
                }}
                rounded
                color = { Colors.pdmRoxo }
                title = "LOGIN"
                accessibilityLabel = "Fazer o login no aplicativo"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight + 20,      
      backgroundColor: Colors.pdmRoxo1,
      justifyContent: "space-evenly"
    },
    tituloTela: {
        height: 42,
        marginLeft: 36,
        alignItems: "center",
        color: '#FFCB0D',
        fontSize: 36.0764,
        marginBottom: 40,
        fontFamily: 'roboto-medium'
    },
    descricaoTela: {
        width: 335,
        height: 96,
        marginLeft: 36,
        fontWeight: "bold",
        fontSize: 25.2709,
        color: '#E6E6E6',
        fontFamily: 'open-sans-regular'
    },
    inputStyle: {
        paddingHorizontal: 20,
        height: 60,
        marginHorizontal: 35,
        backgroundColor: '#220A40',
        borderRadius: 10,
        fontFamily: "Roboto",
        fontSize: 15,
        color: '#5F1AB3'
    },
    botaoSublinhado: {
        backgroundColor: Colors.pdmRoxo1
    }
});