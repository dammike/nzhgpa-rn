import React from 'react'
import { StyleSheet, View } from 'react-native'

import AppButton from './AppButton'
import AppText from './AppText'

export default function RetryConnection({ onPress }) {
    return (
        <View style={styles.retryPanel}>
            <AppText>Couldn't retrieve the listings...</AppText>
            <AppButton backgroundColor="tomato" iconName="reload-alert" title="Try Again" onPress={onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    retryPanel: {
        alignItems: 'center',
        marginVertical: 18,
    }
})
