import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppFormField from '../components/AppFormField'
import AppFormButton from '../components/AppFormButton'
import AppForm from '../components/AppForm'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

const validationSchema = Yup.object().shape({
    date: Yup.string().required().label('Date'),
    time: Yup.string().required().label('Time'),
    region: Yup.string().required().label('Region'),

});

const initialValues = { date: '', time: '', region: '' };

export default function AirsFormScreen() {
    return (
        <Screen>
            <ListItem
                image={require('../assets/profile.jpeg')}
                title="Accident &amp; Incident Reporting System"
                description="AIRS helps pilots to be safe as a community. Your valuble input for logging in incidents help other pilots like you to be better aware of such situations and avoid them in the future."
                style={{ marginBottom: 10 }} />

            <AppForm validationSchema={validationSchema} initialValues={initialValues}>
                <AppFormField param="date" placeholder="Date" iconName="calendar-month" />
                <AppFormField param="time" placeholder="Time of Incident" iconName="clock" />
                <AppFormField param="region" placeholder="Region" iconName="map-marker-alert" />
                <AppFormButton />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    headerTxt: {
        backgroundColor: 'yellow',
        fontSize: 20,
        padding: 20,
    }
})
