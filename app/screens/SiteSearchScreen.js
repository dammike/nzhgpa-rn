import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { Image, ImageBackground, TouchableWithoutFeedback, View } from 'react-native';
import { FlatList, ScrollView, StyleSheet, Text } from 'react-native'
import AppText from '../components/AppText';
import CardTile from '../components/CardTile';
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors';

const sites = [
    { id: 1, name: 'KARIOITAHI', image: require('../assets/post-banner-1.jpg'), windDirection: 'NNW', siteRecord: '76.5km', isActive: true },
    { id: 2, name: 'MURIWAI', image: require('../assets/post-banner-2.jpg'), windDirection: 'NNW' },
    { id: 3, name: 'WHANGAREI', image: require('../assets/card-banner.jpg'), windDirection: 'NNW', siteRecord: '99.6km' },
    { id: 4, name: 'NORTH-HEADS', image: require('../assets/background.jpg'), windDirection: 'NNW' },
];

const SortPanel = () => (
    <View style={styles.sortPanel}>
        <TouchableWithoutFeedback onPress={() => console.log('filter results!')}>
            <View style={styles.headerBtnBox}>
                <AppText style={styles.headerBtnTitle}>Region: AUCKLAND</AppText>
                <MaterialCommunityIcons name='chevron-down' />
            </View>
        </TouchableWithoutFeedback>

        <View style={styles.headerPanel}>
            <AppText style={styles.headerPanelTxt}>Wind: SSW</AppText>
            <MaterialCommunityIcons name='wind-turbine' size={20} />
        </View>
    </View>
);

function SiteSearchScreen({ navigation }) {
    return (
        <Screen>
            <View style={styles.container}>
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
                    />
                </View>
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
        width: '30%',
        justifyContent: 'space-between',
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
    }
})

export default SiteSearchScreen
