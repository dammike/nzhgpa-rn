import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'

export default function FeedScreen() {
    return (
        <Screen>
            <Card
                image={require('../assets/card-banner.jpg')}
                title="New Story"
                description="New Story"
                onPress={() => console.log('card pressed!')} />
            <Card />
            <Card />
        </Screen>
    )
}

const styles = StyleSheet.create({
})
