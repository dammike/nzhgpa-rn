import React, { useState, useEffect } from 'react'
import { Platform, ScrollView, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import * as Yup from 'yup';

import Screen from '../components/Screen'
import AppFormField from '../components/AppFormField'
import AppFormButton from '../components/AppFormButton'
import AppForm from '../components/AppForm'
import ListItem from '../components/ListItem'
import AppText from '../components/AppText'
import flyingSitesApi from '../api/flyingSites';
import airsApi from '../api/airs';
import RetryConnection from '../components/RetryConnection';
import ActivityLoader from '../components/ActivityLoader';
import AppFormPicker from '../components/AppFormPicker'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
    // aircraftType: Yup.string().required().label('Aircraft Type'),
    // pilotCertificate: Yup.string().required().label('Pilot Rating'),
    // otherInfo: Yup.string().required().label('Other Info'),
    // Basic Info
    date: Yup.string().required().label('Date'),
    time: Yup.string().required().label('Time'),
    region: Yup.string().required().label('Region'),
    // pilotExperience: Yup.string().required().label('Pilot Experience'),
    siteLocation: Yup.string().required().label('Site Location'),
    siteFamiliarity: Yup.string().required().label('Site Familiarity'),
    // // Report Summary
    // whatHappened: Yup.string().required().label('What Happened'),
    // typeOfOccurance: Yup.string().required().label('Type of Occurance'),
    // degreeOfInjury: Yup.string().required().label('Degree of Injury'),
    // locationOfMainInjury: Yup.string().required().label('Location of Main Injury'),
    // otherInjuryDetails: Yup.string().label('Other Injury Details'),
    // gliderDamage: Yup.string().required().label('Glider Damage'),
    // // Flight Stage
    // purposeOfFlight: Yup.string().required().label('Purpose of Flight'),
    // phaseOfFlight: Yup.string().required().label('Phase of Flight'),
    // //EQUIPMENT
    // helmet: Yup.string().required().label('Helmet'),
    // harness: Yup.string().required().label('Reserve'),
    // reserve: Yup.string().required().label('Harness'),
    // //WEATHER
    // windSpeed: Yup.string().required().label('Wind Speed'),
    // windDirection: Yup.string().required().label('Wind Direction'),
    // windConditions: Yup.string().required().label('Wind Conditions'),
});

export default function AirsFormScreen({ navigation }) {
    const [flyingSites, setFlyingSites] = useState([]);
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Date & time 
    const [date, setDate] = useState(new Date(new Date().getTime()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetchFlyingSites();
        fetchRegions();

        // clean up subscriptions on unmount.
        return () => {
            setLoading(false);
        };
    }, []);

    const initialValues = {
        aircraftType: '', pilotCertificate: '', otherInfo: '',
        date: date.toDateString(), time: date.toTimeString(), region: '', siteLocation: '', siteFamiliarity: '',
        whatHappened: '', typeOfOccurance: '', degreeOfInjury: '', locationOfMainInjury: '', otherInjuryDetails: '', gliderDamage: '',
        purposeOfFlight: '', phaseOfFlight: '',
        helmet: '', harness: '', reserve: '',
        windSpeed: '', windDirection: '', windConditions: '',
        pilotExperience: ''
    };

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

    const handleSubmit = async (values) => {
        values.date = moment(date).format('YYYY-MM-DD');
        values.time = moment(date).format('YYYY-MM-DD HH:mm:00');

        setLoading(true);
        const response = await airsApi.postAirs(values);
        if (response.problem) { console.log(response.problem) }
        if (!response.ok) {
            setLoading(false);
            return setError(true);
        }
        setLoading(false);
        setError(false);
        setSubmitted(true);

        navigation.goBack();
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };


    return (
        <Screen>
            {(!error && loading) &&
                <ActivityLoader visible={loading} />
            }
            {error &&
                <RetryConnection onPress={fetchFlyingSites} />
            }
            {!error &&
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ListItem
                        image={require('../assets/profile.jpeg')}
                        title="Accident &amp; Incident Reporting System"
                        description="By creating a report you're saving someone from getting in trouble."
                        style={{ marginBottom: 10 }} />

                <AppForm
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    <AppText style={styles.sectionHeader}>Step 1 - Date, Time &amp; Location</AppText>
                    {/*==================================================================================*/}
                    <TouchableWithoutFeedback onPress={showDatepicker}>
                        <AppFormField
                            editable={false}
                            iconName="calendar-month"
                            param="date"
                            placeholder="Date of Incident"
                            value={moment(date).format('ddd - MMM DD YYYY')}
                            style={styles.dateTimePicker}
                        />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={showTimepicker}>
                        <AppFormField
                            editable={false}
                            iconName="clock"
                            param="time"
                            placeholder="Time of Incident"
                            value={`${moment(date).format('LT')}`}
                            style={styles.dateTimePicker}
                        />
                    </TouchableWithoutFeedback>
                    <AppFormField param="region" placeholder="Region" iconName="map-marker-alert" />
                    {/* <AppFormPicker items={regions} onChangeSelect={(item) => console.log(item)} /> */}
                    <AppFormField param="siteLocation" placeholder="Site Location" iconName="map-marker-alert" />
                    <AppFormField param="siteFamiliarity" placeholder="Site Familiarity" iconName="map-marker-alert" />

                    <AppText style={styles.sectionHeader}>Step 2 - Flight Stage</AppText>

                    <AppText style={styles.sectionHeader}>Step 3 - Equipment</AppText>

                    <AppText style={styles.sectionHeader}>Step 4 - Pilot's Skill Level</AppText>

                    <AppText style={styles.sectionHeader}>Step 5 - Weather</AppText>

                    {!submitted ? <AppFormButton /> : <AppText>Saved...</AppText>}
                </AppForm>
            </ScrollView>
            }

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </Screen>
    )
}

const styles = StyleSheet.create({
    dateTimePicker: {
        color: colors.primary,
        fontWeight: 'bold'
    },
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
