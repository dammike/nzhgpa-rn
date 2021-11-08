import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

export default function AppButton({ onPress, backgroundColor = colors.primary, title }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.btn, { backgroundColor: backgroundColor }]}>
            <View>
                <AppText style={styles.btnTxt}>{title}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        borderRadius: 30,
        height: 60,
        justifyContent: 'center',
        marginVertical: 4,
        width: '100%',
        elevation: 15,
    },
    btnTxt: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})
