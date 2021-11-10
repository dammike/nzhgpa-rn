import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

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
