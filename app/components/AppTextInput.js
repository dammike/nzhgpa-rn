import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IconComponent from './IconComponent';

export default function AppTextInput({ placeholder, IconComponent, ...otherProps }) {
    return (
        <View style={styles.inputContainer}>
            <View style={{ paddingRight: 20 }}>
                {IconComponent}
            </View>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 14
    },
    inputContainer: {
        backgroundColor: colors.white,
        padding: 12,
        paddingLeft: 20,
        borderRadius: 40,
        elevation: 6,
        borderBottomColor: '#eee4',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    }
})
