import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native'
import colors from '../config/colors';

export default function ActivityLoader({ visible = false }) {
    if (!visible) return null;
    return (
        <LottieView
            source={require('../assets/cog-wheel.json')}
            loop
            autoPlay
            visible={visible}
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        backgroundColor: colors.white,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute'
    }
})
