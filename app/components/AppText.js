import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export default function AppText({ children, style, ...otherProps }) {
    return (
        <View>
            <Text style={[styles.txt, style]} {...otherProps}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 14,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})
