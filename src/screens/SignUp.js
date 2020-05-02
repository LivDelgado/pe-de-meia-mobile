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

    function login() {
        navigation.navigate('Login');
    }

    function cadastrar() {
        // TODO: conexão com a API - fazer login
        navigation.navigate('TutorialPresentation');
    }

    const [nome, setNome] = React.useState('Nome');
    const [email, setEmail] = React.useState('Email');
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
                    backgroundColor: Colors.pdmAzul, 
                    padding: 0
                }}
                color={ Colors.pdmAmarelo }
                leftIcon={{name: 'keyboard-arrow-left'}}
                title='Voltar'
            />
            <Text style={styles.tituloTela}>
                CADASTRO
            </Text>
            <Text style={styles.descricaoTela}>
                Pronto para juntar seu pé de meia?
            </Text>
            <Text style={styles.subDescricaoTela}>
                Pronto para juntar seu pé de meia?
            </Text>
            <TextInput
                style={styles.inputStyle}
                clearTextOnFocus
                onChangeText={text => setNome(text)}
                value={nome}
                maxLength={40}
            />
            <TextInput
                style={styles.inputStyle}
                clearTextOnFocus
                onChangeText={text => setEmail(text)}
                value={email}
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
                onPress = { login }
                buttonStyle = {styles.botaoSublinhado}
                color = { Colors.pdmAmarelo }
                title = "Já tem uma conta?"
                accessibilityLabel = "Informe se já tem uma conta"
            />
            <Button 
                onPress = { cadastrar }
                containerStyle = {{
                    flex: 1
                }}
                buttonStyle = {{ 
                    backgroundColor: Colors.pdmAmarelo,
                    borderColor: Colors.pdmAmarelo,
                }}
                rounded
                color = { Colors.pdmRoxo }
                title = "CADASTRAR"
                accessibilityLabel = "Fazer o cadastro no aplicativo"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight + 20,      
      backgroundColor: Colors.pdmAzul,
      justifyContent: "space-evenly"
    },
    tituloTela: {
        height: 42,
        marginLeft: 36,
        alignItems: "center",
        color: '#FFCB0D',
        fontSize: 36.0764,
        marginBottom: 40
    },
    descricaoTela: {
        width: 324,
        marginLeft: 36,
        fontSize: 24.91,
        color: '#E5E5E5'
    },
    subDescricaoTela: {
        width: 335,
        height: 96,
        marginLeft: 36,
        fontSize: 14,
        color: '#E6E6E6'
    },
    inputStyle: {
        paddingHorizontal: 20,
        height: 60,
        marginHorizontal: 35,
        backgroundColor: '#135680',
        borderRadius: 10,
        fontFamily: "Roboto",
        fontSize: 15,
        color: Colors.pdmAzul
    },
    botaoSublinhado: {
        backgroundColor: Colors.pdmAzul
    }
});