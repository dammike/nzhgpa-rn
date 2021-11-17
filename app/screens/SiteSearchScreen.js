import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react'
import { Image, ImageBackground, TouchableWithoutFeedback, View } from 'react-native';
import { FlatList, ScrollView, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements';

import AppFormPicker from '../components/AppFormPicker';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import CardTile from '../components/CardTile';
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors';
import flyingSitesApi from '../api/flyingSites';
import IconComponent from '../components/IconComponent';
import AppButton from '../components/AppButton';

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
    const [flyingSites, setFlyingSites] = useState();
    const [error, setError] = useState(false);

    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedWind, setSelectedWind] = useState();

    useEffect(() => {
        fetchFlyingSites();
    }, []);

    const fetchFlyingSites = async () => {
        const response = await flyingSitesApi.getFlyingSites();
        if (!response.ok) return setError(true);
        setError(false);
        setFlyingSites(response.data);
    }

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
                        {error &&
                            <View style={{ alignItems: 'center', marginBottom: 18, }}>
                                <AppText>Couldn't retrieve the listings...</AppText>
                                <AppButton backgroundColor="tomato" iconName="reload-alert" title="Try Again" onPress={() => fetchFlyingSites()} />
                            </View>
                        }
                    <FlatList
                        horizontal
                            data={flyingSites}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <CardTile
                                description={'Site Record: ' + item.siteRecord + '\nStatus: ' + item.isActive}
                                imageURI={item.imageURI}
                                title={item.name}
                                style={{ width: 200, marginRight: 10, }}
                                onPress={() => navigation.navigate('SiteSearchResultDetails', item)}
                            />
                        )}
                        showsHorizontalScrollIndicator={false}
                    />
                        <SortPanel />
                        <View style={styles.results}>
                            <AppText style={{ fontWeight: 'bold' }}>8 Total Results!`</AppText>
                        </View>
                    </View>
                    <Divider width={1} />
                    <View style={styles.flightOfTheDayContainer}>
                        <View>
                            <AppText style={styles.gloryTitle}>
                                <IconComponent name="camera" color="dodgerblue" />
                                Flight of the Day</AppText>
                            <AppText>(6hrs ago at KARIO)</AppText>
                        </View>
                        <AppText> Pilot: Dammike Saman · </AppText>
                </View>
                <ImageBackground
                    source={require('../assets/glory.jpg')}
                    style={styles.gloryImage}
                    >
                        <Image source={require('../assets/logo.png')} style={{ width: '20%', height: 50, resizeMode: 'contain', left: 10, top: 10, }} />
                    </ImageBackground>
                </ScrollView>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    flightOfTheDayContainer: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    sortPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.white,
    },
    gloryTitle: {
        fontSize: 20,
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
