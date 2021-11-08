import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IconComponent from './IconComponent';

export default function AppTextInput({ placeholder, IconComponent, ...otherProps }) {
    return (
        <View style={styles.inputContainer}>
            {IconComponent}
            <TextInput
                {...otherProps}
                placeholder={placeholder}
                style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
    },
    inputContainer: {
        backgroundColor: colors.grey,
        padding: 12,
        borderRadius: 6,
        elevation: 6,
        borderBottomColor: '#eee4',
        borderBottomWidth: 1,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
    }
})
