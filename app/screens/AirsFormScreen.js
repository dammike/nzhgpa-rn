import React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppFormField from '../components/AppFormField'
import AppFormButton from '../components/AppFormButton'
import AppForm from '../components/AppForm'
import ListItem from '../components/ListItem'
import AppText from '../components/AppText'

const validationSchema = Yup.object().shape({
    date: Yup.string().required().label('Date'),
    time: Yup.string().required().label('Time'),
    region: Yup.string().required().label('Region'),

});

const initialValues = { date: '', time: '', region: '' };

export default function AirsFormScreen() {
    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListItem
                    image={require('../assets/profile.jpeg')}
                    title="Accident &amp; Incident Reporting System"
                    description="AIRS helps pilots to be safe as a community. Your valuble input for logging in incidents help other pilots like you to be better aware of such situations and avoid them in the future."
                    style={{ marginBottom: 10 }} />

                <AppForm validationSchema={validationSchema} initialValues={initialValues}>
                    <AppText style={styles.sectionHeader}>Step 1 - Date, Time &amp; Location</AppText>

                    <AppFormField param="date" placeholder="Date" iconName="calendar-month" />
                    <AppFormField param="time" placeholder="Time of Incident" iconName="clock" />
                    <AppFormField param="region" placeholder="Region" iconName="map-marker-alert" />

                    <AppText style={styles.sectionHeader}>Step 2 - Flight Stage</AppText>

                    <AppText style={styles.sectionHeader}>Step 3 - Equipment</AppText>

                    <AppText style={styles.sectionHeader}>Step 4 - Pilot's Skill Level</AppText>

                    <AppText style={styles.sectionHeader}>Step 5 - Weather</AppText>

                    <AppFormButton />
                </AppForm>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    headerTxt: {
        fontSize: 20,
        padding: 20,
    },
    sectionHeader: {
        padding: 10,
        fontSize: 20,
        fontWeight: '700',
    }
})
