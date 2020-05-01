import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

import Colors from '../constants/Colors';

export default function TutorialPresentation() {
    const navigation = useNavigation();

    return (
        <Text>Apresentação do Tutorial</Text>
    );
}