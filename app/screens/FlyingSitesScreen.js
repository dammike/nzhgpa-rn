import React from 'react'
import { Image, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'

export default function FlyingSitesScreen({ navigation }) {
    return (
        <Screen>
            <View>
                <Image source={require('../assets/logo.png')} style={{ width: '40%', height: 50, resizeMode: 'contain' }} />
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('SiteSearchNavigator')} >
                <ListItem title="Site Search" description="Find sites closer to you along with it's current WX info." />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('LiveTracking')} >
                <ListItem title="Live Tracking" description="Join Pilots looking for friends to fly in real time, track their progress on a Map." />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('ChallengeSeries')} >
                <ListItem title="Challenge Series" description="Beat your personal best or undertake an existing serie of fun challenges" />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('HallOfFame')} >
                <ListItem title="Hall of Fame" description="New Zealand XC League &amp; all site records." />
            </TouchableWithoutFeedback>
        </Screen>
    )
}

const styles = StyleSheet.create({})
