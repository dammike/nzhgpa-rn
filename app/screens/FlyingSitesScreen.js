import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'

export default function FlyingSitesScreen({ navigation }) {
    return (
        <Screen>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('SiteSearch')} >
                <ListItem title="Site Search" description="Find sites closer to you along with it's current WX info." />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('LiveTracking')} >
                <ListItem title="Live Tracking" description="Join Pilots looking for friends to fly in real time, track their progress on a Map." />
            </TouchableWithoutFeedback>
        </Screen>
    )
}

const styles = StyleSheet.create({})
