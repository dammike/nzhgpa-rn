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
    { title: 'North', abbrev: 'N', value: 1 },
    { title: 'North North-East', abbrev: 'NNE', value: 2 },
    { title: 'North East', abbrev: 'NE', value: 3 },
    { title: 'East North-East', abbrev: 'ENE', value: 4 },
    { title: 'East', abbrev: 'E', value: 5 }
];

function SiteSearchScreen({ navigation }) {
    const [flyingSites, setFlyingSites] = useState([]);
    const [filteredResults, setFilteredResults] = useState();
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

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
        setSelectedRegion(item);
        setLoading(true);
        //Filter or Call Rest API
        if (item.value != -1) {
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

    const filterByWind = item => {
        setSelectedWind(item);
        //Filter or Call Rest API
        console.log(item);
    }

    const search = (inputTxt) => {
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
                summary="Select Preffered Wind Direction..."
                IconComponent={<IconComponent name="compass" size={20} />}
            />
            }
        </View>
    );

    return (
        <Screen>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <AppTextInput placeholder="Search..." onChangeText={search} />
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
                                keyExtractor={item => item.id.toString()}
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
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-between'
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
    headerBtnTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 10,
        marginRight: 8,
    },
    sortPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sortBtns: {
        width: '50%'
    },
    container: {
        flex: 1,
    },
    resultsContainer: {
        marginBottom: 10,
        fontWeight: '800',
    },
    results: {
        paddingHorizontal: 5,
    }
})

export default SiteSearchScreen
