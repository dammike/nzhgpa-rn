import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Platform } from 'react-native';
import colors from '../config/colors';

export default function Screen({ children }) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        marginHorizontal: 10,
    }
})
