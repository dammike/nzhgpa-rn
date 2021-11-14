import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

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

    var site = route.params;

    const SiteInformation = () => (
        <View style={styles.section}>
            <Section
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
                title="Weather"
                description={site.weatherAndWindDirection.notes}
                IconComponent={<IconComponent name="weather-partly-cloudy" size={40} color={colors.white} />} />
            <ListItem title="Site Wind Direction" description={site.weatherAndWindDirection.windDirection} />
        </View>
    );

    const MandatoryNotices = () => (
        <View style={styles.section}>
            <Section
                title="Mandatory Notices"
                description={site.mandatoryNotices}
                IconComponent={<IconComponent name="sign-caution" size={40} color={colors.white} />} />
        </View>
    );

    const SiteRadioChannel = () => (
        <View style={styles.section}>
            <Section
                title="Site Radio Channel"
                description={`Channel ${site.siteRadio.channel} - ${site.siteRadio.frequency}`}
                IconComponent={<IconComponent name="radio-handheld" size={40} color={colors.white} />} />
        </View>
    );

    const Restrictions = () => (
        <View style={styles.section}>
            <Section
                title="Restrictions"
                IconComponent={<IconComponent name="file-eye" size={40} color={colors.white} />}
            />
            <ListItem title="Hang Gliding" description={site.restrictions.HG} />
            <ListItem title="Paragliding" description={site.restrictions.PG} />
        </View>
    );

    const Cautions = () => (
        <View style={styles.section}>
            <Section
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
                title="Airspace"
                description={site.airspace}
                IconComponent={<IconComponent name="airport" size={40} color={colors.white} />} />
        </View>
    );

    const AccessConditions = () => (
        <View style={styles.section}>
            <Section
                title="Access Conditions"
                description={site.accessConditions}
                IconComponent={<IconComponent name="key" size={40} color={colors.white} />} />
        </View>
    );

    const SiteMonitor = () => (
        <View style={styles.section}>
            <Section
                title="Site Monitor"
                description={`${site.siteMonitor.name} \nPhone: ${site.siteMonitor.contact.phone} \nMobile: ${site.siteMonitor.contact.mobile}`}
                IconComponent={<IconComponent name="cellphone-iphone" size={40} color={colors.white} />} />
        </View>
    );

    const AdditionalNotes = () => (
        <View style={styles.section}>
            <Section
                title="Additional Notes"
                description={site.notes}
                IconComponent={<IconComponent name="pen" size={40} color={colors.white} />} />
        </View>
    );

    const SiteAchievements = () => (
        <View style={styles.section}>
            <Section
                title="Site Achievements"
                description={site.notes}
                IconComponent={<IconComponent name="trophy" size={40} color={colors.white} />} />
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[1]}
            >
                <ImageBackground source={site.image} style={styles.image} />

                <ListItem style={styles.headerListItem}
                    image={require('../assets/profile.jpeg')}
                    title={site.name}
                    description="Auckland, New Zealand(SW, SSW, NW)" />

                <View style={styles.sectionsContainer}>
                    <FlatList
                        data={[
                            { id: 1, ele: <SiteInformation /> },
                            { id: 2, ele: <Weather /> },
                            { id: 3, ele: <MandatoryNotices /> },
                            { id: 4, ele: <SiteRadioChannel /> },
                            { id: 5, ele: <Restrictions /> },
                            { id: 6, ele: <Cautions /> },
                            { id: 7, ele: <Airspace /> },
                            { id: 8, ele: <AccessConditions /> },
                            { id: 9, ele: <SiteMonitor /> },
                            { id: 10, ele: <AdditionalNotes /> },
                            { id: 11, ele: <SiteAchievements /> },
                        ]}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View>{item.ele}</View>
                        )}
                        horizontal
                        snapToAlignment="center"
                        snapToInterval={Dimensions.get('window').width}
                    />

                    {/* <SiteInformation />
                    <Weather />
                    <MandatoryNotices />
                    <SiteRadioChannel />
                    <Restrictions />
                    <Cautions />
                    <Airspace />
                    <AccessConditions />
                    <SiteMonitor />
                    <AdditionalNotes />
                    <SiteAchievements /> */}
                </View>

                <View style={styles.mapContainer}>
                    <ListItem title="Site Location"
                        // IconComponent={<IconComponent name="map-marker" size={20} />}
                        description="To see live tracking info for this site, please navigate to the Live Tracking page"
                    />
                    <MapView initialRegion={{
                        latitude: -36.89083298340516,
                        longitude: 174.45002621587918,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02
                    }} style={styles.map} >

                        <Marker
                            coordinate={{ latitude: -36.89083298340516, longitude: 174.45002621587918 }}
                        //image={{ uri: 'custom_pin' }}
                        />
                    </MapView>
                </View>

                <View style={styles.footerSection}>
                    <ListItem
                        title="Contact hours: 2-5pm"
                        description="Feel free to send a message to Derek at derek@gmail.com" />
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
        height: 100,
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
