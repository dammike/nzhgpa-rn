import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Image, ImageBackground, TouchableWithoutFeedback, View } from 'react-native';
import { FlatList, ScrollView, StyleSheet, Text } from 'react-native'
import { Divider } from 'react-native-elements';
import AppFormPicker from '../components/AppFormPicker';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import CardTile from '../components/CardTile';
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors';

const sites = [
    {
        id: 1,
        name: "Bethell's Beach",
        coords: {
            latitude: -36.89083298340516,
            longitude: 174.45002621587918,
        },
        description: "Bethell's Beach is located on Auckland's West Coast between Piha and Muriwai Beaches. It's accessible by taking Bethell's road from Swanson on the Northern end of the Waitakere Ranges",
        image: require('../assets/post-banner-1.jpg'),
        siteInformation: {
            siteType: 'Coastal',
            landing: 'On the beach',
        },
        weatherAndWindDirection: {
            windDirection: 'SW',
            notes: 'The club operates a weather station at Muriwai',
        },
        mandatoryNotices: "The land owner must be contacted prior to flying.  See access conditions.",
        siteRadio: {
            channel: 20,
            frequency: 476.900,
        },
        restrictions: {
            HG: 'none',
            PG: 'PG2 + 60 hours'
        },
        cautions: {
            HG: 'None',
            PG: "Be particularly aware of the possibility of turbulence from the headland located to the South.  Take particular caution in the event of wind change as as any change and strengthening to the South results in no safe landing options remaining.  For the same wind direction and conditions there are much more friendly sites available.",
        },
        airspace: 'This site is located in VFR Transit Lane T156 with a flight ceiling of 1500 feet A.S.L.',
        accessConditions: "The farmer who owns the property has concerns over our activities disturbing stock and has asked that we check with him before entering or flying.  Check with the site monitor prior to flying.",
        siteRecord: '76.5km', isActive: true,
        siteMonitor: {
            name: 'Alan Hills',
            contact: {
                phone: '09 570 5759',
                mobile: '027 398 2345 '
            }
        },
        notes: 'None',
        siteAchievements: 'none',
    },
    { id: 2, name: 'MURIWAI', image: require('../assets/post-banner-2.jpg'), windDirection: 'NW' },
    { id: 3, name: 'WHANGAREI', image: require('../assets/card-banner.jpg'), windDirection: 'SSW', siteRecord: '99.6km' },
    { id: 4, name: 'NORTH-HEADS', image: require('../assets/background.jpg'), windDirection: 'ESE' },
];


const regions = [
    { title: 'Auckland', value: 1 },
    { title: 'Waikato', value: 2 },
    { title: 'Wellington', value: 3 },
];

const windDrections = [
    { title: 'North', abbrev: 'N', value: 1 },
    { title: 'North North-East', abbrev: 'NNE', value: 2 },
    { title: 'North East', abbrev: 'NE', value: 3 },
    { title: 'East North-East', abbrev: 'ENE', value: 4 },
    { title: 'East', abbrev: 'E', value: 5 }
];

function SiteSearchScreen({ navigation }) {
    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedWind, setSelectedWind] = useState();

    const filterByRegion = item => {
        setSelectedRegion(item);
        //Filter or Call Rest API
        console.log(item);
    }

    const filterByWind = item => {
        setSelectedWind(item);
        //Filter or Call Rest API
        console.log(item);
    }

    const SortPanel = () => (
        <View style={styles.sortPanel}>
            <View style={styles.headerBtnBox}>
                {/* <AppText style={styles.headerBtnTitle}>Region:</AppText> */}
                <AppFormPicker
                    items={regions}
                    selectedItem={selectedRegion}
                    onChangeSelect={filterByRegion}
                    placeholder="Choose Region"
                    summary="Choose a Region"
                    IconComponent={<MaterialCommunityIcons name="map-marker" size={20} />} />
            </View>

            <View style={styles.headerPanel}>
                <AppText style={styles.headerPanelTxt}>
                </AppText>
                <AppFormPicker
                    style={styles.headerPanelTxt}
                    items={windDrections}
                    selectedItem={selectedWind}
                    onChangeSelect={filterByWind}
                    placeholder="Wind Direction"
                    summary="Select Preffered Wind Direction..."
                    IconComponent={<MaterialCommunityIcons name="compass" size={20} />} />
            </View>
        </View>
    );

    return (
        <Screen>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <AppTextInput placeholder="Search..." />
                    <View style={styles.resultsContainer}>
                    <FlatList
                        horizontal
                        data={sites}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <CardTile
                                description={item.windDirection + '· Site Record: ' + item.siteRecord + '\nStatus: ' + item.isActive}
                                image={item.image}
                                title={item.name}
                                style={{ width: 200, backgroundColor: 'yellow', marginRight: 10, }}
                                onPress={() => navigation.navigate('SiteSearchResultDetails', item)}
                            />
                        )}
                        showsHorizontalScrollIndicator={false}
                    />
                        <SortPanel />
                        <View style={styles.results}>
                            <AppText style={{ fontWeight: 'bold' }}>8 Total Results!</AppText>
                        </View>
                    </View>
                    <Divider width={1} />
                <View style={styles.flightOfTheDayContainer}>
                    <View>
                        <View>
                            <Image source={require('../assets/logo.png')} style={{ width: '40%', height: 50, resizeMode: 'contain' }} />
                        </View>
                        <View>
                            <AppText style={styles.gloryTitle}>
                                Flight of the Day
                            </AppText>
                            <AppText>PILOT: Dammike Saman · (6hrs ago at KARIO)</AppText>
                        </View>
                    </View>
                </View>
                <ImageBackground
                    source={require('../assets/glory.jpg')}
                    style={styles.gloryImage}
                />
                </ScrollView>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    flightOfTheDayContainer: {

    },
    sortPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.white,
    },
    gloryTitle: {
        fontSize: 34,
    },
    gloryImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        borderColor: colors.white,
        borderWidth: 1,
    },
    headerBtnBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBtnTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 10,
        marginRight: 8,
    },
    headerPanel: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerPanelTxt: {
        fontSize: 14,
    },
    container: {
        flex: 1,
    },
    resultsContainer: {
        marginBottom: 10,
        fontWeight: '800',
    },
    results: {
        // paddingVertical: ,
        paddingHorizontal: 5,
    }
})

export default SiteSearchScreen
