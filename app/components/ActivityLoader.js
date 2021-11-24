import React from 'react'
import { Text, View } from 'react-native'
import LottieView from 'lottie-react-native'

export default function ActivityLoader({ visible = false }) {
    if (!visible) return null;
    return (
        <LottieView
            source={require('../assets/paper-plane.json')}
            loop
            autoPlay
            visible={visible} />
    )
}
