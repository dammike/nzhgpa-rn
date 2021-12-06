import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';

import AppText from '../components/AppText'
import Comments from '../components/Comments'
import IconComponent from '../components/IconComponent';
import ListItem from '../components/ListItem'
import Section from '../components/Section';
import colors from '../config/colors'

const commentData = [
    { id: 1, author: 'Peter Jackson', comment: 'I think its a great idea', timestamp: '2021-11-20' },
    { id: 2, author: 'Anna Riley', comment: 'Cool!', timestamp: '2021-11-20' },
    { id: 3, author: 'Winnie Gordon', comment: 'Not very happy with this.. Grrr', timestamp: '2021-11-20' },
];

export default function SiteSearchResultDetailsScreen({ route }) {
    const [siteDirectionString, setSiteDirectionString] = useState('Site Direction unavailable for this site..');

    var site = route.params;

    useEffect(() => {
        parseDirectionString();
    }, []);

    const parseDirectionString = () => {
        if (site.weatherAndWindDirection.windDirections.length == 0) return;
        let string = "";
        site.weatherAndWindDirection.windDirections.map(direction => {
            string += direction.label + ' - ' + direction.alias + '\n';
        });
        setSiteDirectionString(string);
    }

    const SiteInformation = () => (
        <View style={styles.section}>
            <Section
                bgColor={colors.primary}
                title="Site Information"
                description={site.description}
                IconComponent={<IconComponent name="information-variant" size={40} color={colors.white} />}
            />
            <ListItem title="Site Type" description={site.siteInformation.siteType} />
            <ListItem title="Landing" description={site.siteInformation.landing} />
        </View>
    );

    const Weather = () => (
        <View style={styles.section}>
            <Section
                bgColor='green'
                title="Weather"
                description={site.weatherAndWindDirection.notes}
                IconComponent={<IconComponent name="weather-partly-cloudy" size={40} color={colors.white} />} />
            <ListItem title="Site Wind Direction" description={siteDirectionString} />
        </View>
    );

    const MandatoryNotices = () => (
        <View style={styles.section}>
            <Section
                bgColor='orange'
                title="Mandatory Notices"
                description={site.mandatoryNotices}
                IconComponent={<IconComponent name="sign-caution" size={40} color={colors.white} />} />
        </View>
    );

    const SiteRadioChannel = () => (
        <View style={styles.section}>
            <Section
                bgColor='brown'
                title="Site Radio Channel"
                description={`Channel ${site.siteRadio.channel} - ${site.siteRadio.frequency}`}
                IconComponent={<IconComponent name="radio-handheld" size={40} color={colors.white} />} />
        </View>
    );

    const Restrictions = () => (
        <View style={styles.section}>
            <Section
                bgColor='red'
                title="Restrictions"
                IconComponent={<IconComponent name="key" size={40} color={colors.white} />}
            />
            <ListItem title="Hang Gliding" description={site.restrictions.HG} />
            <ListItem title="Paragliding" description={site.restrictions.PG} />
        </View>
    );

    const Cautions = () => (
        <View style={styles.section}>
            <Section
                bgColor='tomato'
                title="Cautions"
                IconComponent={<IconComponent name="alert-decagram-outline" size={40} color={colors.white} />}
            />
            <ListItem title="Hang Gliding" description={site.cautions.HG} />
            <ListItem title="Paragliding" description={site.cautions.PG} />
        </View>
    );

    const Airspace = () => (
        <View style={styles.section}>
            <Section
                bgColor='tomato'
                title="Airspace"
                description={site.airspace}
                IconComponent={<IconComponent name="airport" size={40} color={colors.white} />} />
        </View>
    );

    const AccessConditions = () => (
        <View style={styles.section}>
            <Section
                bgColor='orange'
                title="Access Conditions"
                description={site.accessConditions}
                IconComponent={<IconComponent name="file-eye" size={40} color={colors.white} />} />
        </View>
    );

    const SiteMonitor = () => (
        <View style={styles.section}>
            <Section
                bgColor={colors.primary}
                title="Site Monitor"
                description={`${site.siteMonitor.name} \nPhone: ${site.siteMonitor.contact.phone} \nMobile: ${site.siteMonitor.contact.mobile}`}
                IconComponent={<IconComponent name="cellphone-iphone" size={40} color={colors.white} />} />
        </View>
    );

    const AdditionalNotes = () => (
        <View style={styles.section}>
            <Section
                bgColor='brown'
                title="Additional Notes"
                description={site.notes}
                IconComponent={<IconComponent name="pen" size={40} color={colors.white} />} />
        </View>
    );

    const SiteAchievements = () => (
        <View style={styles.section}>
            <Section
                bgColor='green'
                title="Site Achievements"
                description={site.achievements}
                IconComponent={<IconComponent name="trophy" size={40} color={colors.white} />} />
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="light" animated={true} backgroundColor={colors.black} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[1]}
            >
                <ImageBackground source={{ uri: site.imageURI }} style={styles.image} />

                <ListItem style={styles.headerListItem}
                    image={require('../assets/profile.jpeg')}
                    title={site.name}
                    description="Auckland, New Zealand(SW, SSW, NW)"
                />

                <View style={styles.sectionsContainer}>
                    <SiteInformation />
                    <Weather />
                    <MandatoryNotices />
                    <SiteRadioChannel />
                    <Restrictions />
                    <Cautions />
                    <Airspace />
                    <AccessConditions />
                    <SiteMonitor />
                    <AdditionalNotes />
                    <SiteAchievements />
                </View>

                <View style={styles.mapContainer}>
                    <ListItem title="Site Location"
                        // IconComponent={<IconComponent name="map-marker" size={20} />}
                        description="Click on the red flag to navigate to this takeoff site."
                    />
                    <MapView initialRegion={{
                        latitude: -36.89083298340516,
                        longitude: 174.45002621587918,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02
                    }} style={styles.map} >

                        <Marker
                            coordinate={{ latitude: -36.89083298340516, longitude: 174.45002621587918 }}
                        />
                    </MapView>
                </View>

                <View style={styles.footerSection}>
                    <ListItem
                        title="Open Hours"
                        description="Site access is accessible for pilots from 10am to 5pm. Feel free to text site monitor Derek at derek@gmail.com" />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footerSection: {
        paddingTop: 30,
    },
    headerListItem: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 1,
        paddingTop: 15,
        backgroundColor: colors.white,
        top: -10,
    },
    image: {
        width: '100%',
        height: 175,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
    },
    map: {
        width: Dimensions.get('window').width,
        height: 250,
    },
    mapContainer: {

    },
    section: {
        // borderBottomWidth: 1,
        // borderBottomColor: colors.background,
        // elevation: 5,
        // marginHorizontal: 20,
        width: Dimensions.get('window').width,
        borderRadius: 20,
        marginBottom: 20,
    },
    sectionsContainer: {
        borderRadius: 20,
        // backgroundColor: 'yellow',
    },
})
