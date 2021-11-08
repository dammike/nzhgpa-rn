import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

import AppText from './AppText'

export default function ErrorMessage({ error, visible }) {

    if (!visible || !error) return null;

    return (
        <View style={styles.container}>
            <AppText style={styles.error}>{error}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginBottom: 10,
    },
    error: {
        color: colors.secondary,
        fontWeight: '500',
    }
})
