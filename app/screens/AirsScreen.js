import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import AppButton from '../components/AppButton'
import Screen from '../components/Screen'
import colors from '../config/colors'


export default function AirsScreen({ navigation }) {
    return (
        <Screen>
            <AppButton
                iconName="plus-circle-multiple"
                backgroundColor={colors.safe}
                title="Create"
                onPress={() => navigation.navigate('AirsForm')}
            />
            <View style={styles.reportsContainer}>
                <FlatList
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({})
