import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'

export default function FeedScreen({ navigation }) {
    return (
        <Screen>
            <ListItem
                image={require('../assets/logo.png')}
                title="Welcome"
                description="We are currently updating our App to enable LiveTracking" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Card
                    image={require('../assets/card-banner.jpg')}
                    title="New Story"
                    description="New Story"
                    onPress={() => navigation.navigate('FeedDetails')}
                />
                <Card />
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({

})
