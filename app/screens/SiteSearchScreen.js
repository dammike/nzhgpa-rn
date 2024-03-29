import React, { useState, useEffect, useRef } from 'react'
import { Animated, Image, ImageBackground, View } from 'react-native';
import { FlatList, ScrollView, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements';

import AppFormPicker from '../components/AppFormPicker';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import CardTile from '../components/CardTile';
import Screen from '../components/Screen'
import colors from '../config/colors';
import flyingSitesApi from '../api/flyingSites';
import IconComponent from '../components/IconComponent';
import RetryConnection from '../components/RetryConnection';
import ActivityLoader from '../components/ActivityLoader';

const windDrections = [
    { title: 'North', abbrev: 'N', value: 'N' },
    { title: 'North North-East', abbrev: 'NNE', value: 'NNE' },
    { title: 'North East', abbrev: 'NE', value: 'NE' },
    { title: 'East North-East', abbrev: 'ENE', value: 'ENE' },
    { title: 'East', abbrev: 'E', value: 'E' },
    { title: 'East South East', abbrev: 'ESE', value: 'ESE' },
    { title: 'South East', abbrev: 'SE', value: 'SE' },
    { title: 'South South East', abbrev: 'SSE', value: 'SSE' },
    { title: 'South', abbrev: 'S', value: 'S' },
    { title: 'South South West', abbrev: 'SSW', value: 'SSW' },
    { title: 'South West', abbrev: 'SW', value: 'SW' },
    { title: 'West South West', abbrev: 'SSW', value: 'WSW' },
    { title: 'West', abbrev: 'W', value: 'W' },
    { title: 'West North West', abbrev: 'WNW', value: 'WNW' },
    { title: 'North West', abbrev: 'NW', value: 'NW' },
    { title: 'North North West', abbrev: 'NNW', value: 'NNW' }
];

function SiteSearchScreen({ navigation }) {
    const [flyingSites, setFlyingSites] = useState([]);
    const [filteredResults, setFilteredResults] = useState();
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const [searchTxt, setSearchTxt] = useState('');
    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedWind, setSelectedWind] = useState();

    useEffect(() => {
        fetchFlyingSites();
        fetchRegions();
        fadeIn();
    }, []);

    const fetchFlyingSites = async () => {
        setLoading(true);
        const response = await flyingSitesApi.getFlyingSites();
        if (!response.ok) {
            setLoading(false);
            return setError(true)
        };
        setError(false);
        setFlyingSites(response.data);
        setFilteredResults(response.data);
        setLoading(false);
    }

    const fetchRegions = async () => {
        const response = await flyingSitesApi.getRegions();
        if (!response.ok) {
            setLoading(false);
            return setError(true);
        }
        setRegions(response.data);
    }

    const filterByRegion = async (item) => {
        clearSearchInput();
        clearWind();

        setSelectedRegion(item);
        setLoading(true);

        //Filter or Call Rest API
        if (item.value !== -1) {
            const response = await flyingSitesApi.getFlyingSitesForRegion(item.title);
            if (!response.ok) {
                setFlyingSites([]);
                setFilteredResults([]);
                setLoading(false);
                return;
            }
            setFlyingSites(response.data);
            setFilteredResults(response.data);
        } else {
            fetchFlyingSites();
        }
        setLoading(false);
    }

    const filterByWind = chosen => {
        clearSearchInput();

        setSelectedWind(chosen);
        // Filter flyingSites by wind direction
        if (chosen.value !== -1) {
            const results = flyingSites.filter(site => {
                const directions = site.weatherAndWindDirection.windDirections;
                let matching = false;
                directions.forEach(obj => {
                    if (obj.direction === chosen.value) {
                        matching = true
                    };
                });
                return matching;
            });
            setFilteredResults(results);

        } else {
            fetchFlyingSites();
        }
    }

    const search = (inputTxt) => {
        clearRegion();
        clearWind();

        setSearchTxt(inputTxt);
        setFilteredResults(
            flyingSites.filter(site =>
                site.name.toLowerCase().includes(inputTxt.toLowerCase())
            )
        );
        fadeIn();
    }

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start();
    }

    const clearRegion = () => {
        setSelectedRegion({ title: 'All', value: -1 });
    }

    const clearWind = () => {
        setSelectedWind({ title: 'All', value: -1 });
    }

    const clearSearchInput = () => {
        setSearchTxt('');
    }

    const SortPanel = () => (
        <View style={styles.sortPanel}>
            <AppFormPicker
                style={styles.sortBtns}
                items={regions}
                selectedItem={selectedRegion}
                onChangeSelect={filterByRegion}
                placeholder="Select Region"
                summary="Choose Region"
                IconComponent={<IconComponent name="map-marker" size={20} />}
            />
            {selectedRegion &&
            <AppFormPicker
                style={styles.sortBtns}
                items={windDrections}
                selectedItem={selectedWind}
                onChangeSelect={filterByWind}
                placeholder="Wind Direction"
                summary="Preffered Wind Direction..."
                IconComponent={<IconComponent name="compass" size={20} />}
            />
            }
        </View>
    );

    return (
        <Screen>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <AppTextInput value={searchTxt} placeholder="Search..." onChangeText={search} />
                    <View style={styles.resultsContainer}>
                        {!error &&
                            <View style={styles.results}>
                                <AppText style={{ fontWeight: '800', fontSize: 20 }}>
                                    {filteredResults ? `Found ${filteredResults.length} results.` : 'No results found.'}
                                </AppText>
                            </View>
                        }
                        <SortPanel />
                        <View style={{ height: 200 }}>
                            {error &&
                                <RetryConnection onPress={fetchFlyingSites} />
                            }
                            {(!error && loading) &&
                                <ActivityLoader visible={loading} />
                            }
                            <FlatList
                                horizontal
                                data={filteredResults}
                                keyExtractor={item => item._id.toString()}
                                renderItem={({ item }) => (
                                    <CardTile
                                        description={item.siteInformation.siteType + ' site.\nStatus: ' + item.isActive}
                                        imageURI={item.imageURI}
                                        title={item.name}
                                        style={{ width: 200, marginRight: 10, }}
                                        onPress={() => navigation.navigate('SiteSearchResultDetails', item)}
                                    />
                                )}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View >
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
                    <Animated.View style={{ opacity: fadeAnim }} >
                    <ImageBackground
                        source={require('../assets/glory.jpg')}
                        style={styles.gloryImage}
                    >
                        <Image source={require('../assets/logo.png')} style={{ width: '20%', height: 50, resizeMode: 'contain', left: 10, top: 10, }} />
                    </ImageBackground>
                    </Animated.View>
                </ScrollView >
            </View >
        </Screen >
    )
}

const styles = StyleSheet.create({
    flightOfTheDayContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    gloryTitle: {
        fontSize: 20,
    },
    gloryImage: {
        borderWidth: 1,
        borderColor: colors.white,
        height: 200,
        resizeMode: 'contain',
        width: '100%'
    },
    headerBtnTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 8,
        paddingVertical: 10
    },
    sortPanel: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sortBtns: {
        width: '50%'
    },
    container: {
        flex: 1,
    },
    resultsContainer: {
        fontWeight: '800',
        marginBottom: 10
    },
    results: {
        paddingHorizontal: 5,
    }
})

export default SiteSearchScreen
