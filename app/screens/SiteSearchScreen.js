import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Image, ImageBackground, TouchableWithoutFeedback, View } from 'react-native';
import { FlatList, ScrollView, StyleSheet, Text } from 'react-native'
import { Divider } from 'react-native-elements';
import AppFormPicker from '../components/AppFormPicker';
import AppText from '../components/AppText';
import CardTile from '../components/CardTile';
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors';

const sites = [
    { id: 1, name: 'KARIOITAHI', image: require('../assets/post-banner-1.jpg'), windDirection: 'NNW', siteRecord: '76.5km', isActive: true },
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
                <AppText style={styles.headerBtnTitle}>Region:</AppText>
                <AppFormPicker items={regions} selectedItem={selectedRegion} onChangeSelect={filterByRegion} placeholder="All Regions" summary="Choose a Region" />
            </View>

            <View style={styles.headerPanel}>
                <AppText style={styles.headerPanelTxt}>Wind: </AppText>
                <AppFormPicker style={styles.headerPanelTxt} items={windDrections} selectedItem={selectedWind} onChangeSelect={filterByWind} placeholder="ALL" summary="Select Preffered Wind Direction..." />
                <MaterialCommunityIcons name='wind-turbine' size={20} />
            </View>
        </View>
    );

    return (
        <Screen>
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.resultsContainer}>
                    <SortPanel />
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
                        <View style={styles.results}>
                            <AppText style={{ fontWeight: 'bold' }}>8 Results Found!</AppText>
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
        fontSize: 16,
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
