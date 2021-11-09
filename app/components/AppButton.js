import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

export default function AppButton({ onPress, backgroundColor = 'dodgerblue', iconName, title }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.btn, { backgroundColor: backgroundColor }]}>
            {iconName &&
                <MaterialCommunityIcons name={iconName} size={28} style={styles.icon} />}
            <AppText style={styles.btnTxt}>{title}</AppText>
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
        flexDirection: 'row',
    },
    btnTxt: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    icon: {
        marginRight: 20,
        color: colors.white,
    }
})
