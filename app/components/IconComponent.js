import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

export default function IconComponent({ name, color = colors.white, size = 20 }) {
    return (
        <MaterialCommunityIcons color={color} size={size} style={styles.icon} name={name} />
    )
}

const styles = StyleSheet.create({
    // icon: {
    //     marginRight: 15,
    //     marginLeft: 18,
    // },
})
