import React from 'react'
import { StyleSheet, View } from 'react-native'

import AppButton from './AppButton'
import AppText from './AppText'

export default function RetryConnection({ onPress }) {
    return (
        <View style={styles.retryPanel}>
            <AppText>Bad Reception. Please try again in a few minutes!</AppText>
            <AppButton backgroundColor="tomato" iconName="cloud-refresh" title="Refresh!" onPress={onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    retryPanel: {
        alignItems: 'center',
        paddingTop: '10%',
        position: 'absolute',
        width: '100%',
        zIndex: 1
    }
})
