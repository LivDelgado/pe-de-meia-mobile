import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

import Colors from '../constants/Colors';
import logo from '../assets/images/logo.png';

export default function BeforeLogin() {
    const navigation = useNavigation();


    // function voltar() {
    //     navigation.navigate('BeforeLogin');
    // }

    // function login() {
    //     navigation.navigate('Login');
    // }

    // function cadastrar() {
    //     // TODO: conexão com a API - fazer login
    //     navigation.navigate('TutorialPresentation');
    // }

    return (
        <Text>Cadastro</Text>
    );
}