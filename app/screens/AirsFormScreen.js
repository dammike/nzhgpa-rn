import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppFormField from '../components/AppFormField'
import AppFormButton from '../components/AppFormButton'
import AppForm from '../components/AppForm'
import ListItem from '../components/ListItem'
import AppText from '../components/AppText'
import flyingSitesApi from '../api/flyingSites';
import AppFormPicker from '../components/AppFormPicker'

const validationSchema = Yup.object().shape({
    aircraftType: Yup.string().required().label('Aircraft Type'),
    pilotCertificate: Yup.string().required().label('Pilot Rating'),
    otherInfo: Yup.string().required().label('Other Info'),
    // Basic Info
    date: Yup.string().required().label('Date'),
    time: Yup.string().required().label('Time'),
    region: Yup.string().required().label('Region'),
    pilotExperience: Yup.string().required().label('Pilot Experience'),
    siteLocation: Yup.string().required().label('Site Location'),
    siteFamiliarity: Yup.string().required().label('Site Familiarity'),
    // Report Summary
    whatHappened: Yup.string().required().label('What Happened'),
    typeOfOccurance: Yup.string().required().label('Type of Occurance'),
    degreeOfInjury: Yup.string().required().label('Degree of Injury'),
    locationOfMainInjury: Yup.string().required().label('Location of Main Injury'),
    otherInjuryDetails: Yup.string().label('Other Injury Details'),
    gliderDamage: Yup.string().required().label('Glider Damage'),
    // Flight Stage
    purposeOfFlight: Yup.string().required().label('Purpose of Flight'),
    phaseOfFlight: Yup.string().required().label('Phase of Flight'),
    //EQUIPMENT
    helmet: Yup.string().required().label('Helmet'),
    harness: Yup.string().required().label('Reserve'),
    reserve: Yup.string().required().label('Harness'),
    //WEATHER
    windSpeed: Yup.string().required().label('Wind Speed'),
    windDirection: Yup.string().required().label('Wind Direction'),
    windConditions: Yup.string().required().label('Wind Conditions'),
});

const initialValues = {
    aircraftType: '', pilotCertificate: '', otherInfo: '',
    date: '', time: '', region: '', siteLocation: '', siteFamiliarity: '',
    whatHappened: '', typeOfOccurance: '', degreeOfInjury: '', locationOfMainInjury: '', otherInjuryDetails: '', gliderDamage: '',
    purposeOfFlight: '', phaseOfFlight: '',
    helmet: '', harness: '', reserve: '',
    windSpeed: '', windDirection: '', windConditions: '',
    pilotExperience: ''
};

const reports = [
    {
        id: 1,
        aircraftType: '',
        pilotCertificate: '',
        basicInformation: {
            date: '',
            time: '',
            region: '',
            siteLocation: '',
            // siteRating: '',
            siteFamiliarity: ''
        },
        reportSummary: {
            whatHappened: '',
            typeOfOccurance: '',
            degreeOfInjury: '',
            locationOfMainInjury: '',
            otherInjuryDetails: '',
            gliderDamage: ''
        },
        flightStage: {
            purposeOfFlight: '',
            phaseOfFlight: ''
        },
        equipment: {
            helmet: '',
            harness: '',
            reserve: ''
        },
        weather: {
            windSpeed: '',
            windDirection: '',
            windConditions: ''
        },
        pilotExperience: '',
        otherInfo: ''
    }
];

export default function AirsFormScreen() {
    const [flyingSites, setFlyingSites] = useState([]);
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchFlyingSites();
        fetchRegions();
    }, []);

    const fetchFlyingSites = async () => {
        setLoading(true);
        const response = await flyingSitesApi.getFlyingSites();
        if (!response.ok) return setError(true);
        setError(false);
        setFlyingSites(response.data);
        setLoading(false);
    }

    const fetchRegions = async () => {
        const response = await flyingSitesApi.getRegions();
        setRegions(response.data);
    }

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListItem
                    image={require('../assets/profile.jpeg')}
                    title="Accident &amp; Incident Reporting System"
                    description="AIRS helps pilots to be safe as a community. Your valuble input for logging in incidents help other pilots like you to be better aware of such situations and avoid them in the future."
                    style={{ marginBottom: 10 }} />

                <AppForm
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    <AppText style={styles.sectionHeader}>Step 1 - Date, Time &amp; Location</AppText>
                    <AppFormField param="date" placeholder="Date" iconName="calendar-month" />
                    <AppFormField param="time" placeholder="Time of Incident" iconName="clock" />
                    {/* <AppFormField param="region" placeholder="Region" iconName="map-marker-alert" /> */}
                    <AppFormPicker items={regions} onChangeSelect={(item) => console.log(item)} />
                    <AppFormField param="siteLocation" placeholder="Site Location" iconName="map-marker-alert" />
                    <AppFormField param="siteFamiliarity" placeholder="Site Familiarity" iconName="map-marker-alert" />

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
