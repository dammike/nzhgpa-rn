import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function IconComponent({ name, color = '#a6a09f' }) {
    return (
        <MaterialCommunityIcons color={color} size={24} style={styles.icon} name={name} />
    )
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 8,
    },
})
