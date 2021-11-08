import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AppText({ children, style }) {
    return (
        <View>
            <Text style={[styles.txt, style]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 14,
    }
})
