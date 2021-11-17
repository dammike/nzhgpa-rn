import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Divider } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import AppFormPicker from '../components/AppFormPicker';

import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput'
import ListItem from '../components/ListItem';
import Screen from '../components/Screen'
import colors from '../config/colors';
import pilotsApi from '../api/pilots';

const searchOptions = [
    { title: 'Pilots', value: 1 },
    { title: 'WOF Inspectors', value: 2 },
    { title: 'PG Schools', value: 3 },
    { title: 'HG Schools', value: 4 }
];


export default function DirectoryScreen() {
    const [pilots, setPilots] = useState();
    const [filteredResults, setFilteredResults] = useState();
    const [selectedSearchOption, setSelectedSearchOption] = useState();

    useEffect(() => {
        fetchPilots();
    }, []);

    const fetchPilots = async () => {
        const response = await pilotsApi.getPilots();
        setPilots(response.data);
        setFilteredResults(response.data);
    }

    const search = (searchText) => {
        setFilteredResults(pilots.filter(item => (item.name.toLowerCase().includes(searchText.toLowerCase()))));
    }

    const handleFilteredSearch = item => {
        setSelectedSearchOption(item);
        //Filter or Call Rest API
        console.log(item);
    }

    const SortPanel = () => (
        <View style={styles.sortPanel}>
            <TouchableWithoutFeedback onPress={() => console.log('filter results!')}>
                <View style={styles.headerBtnBox}>
                    <AppText style={styles.searchTitle}>
                        {(filteredResults && filteredResults.length) > 0 ? filteredResults.length : 'No'} Results
                    </AppText>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.headerPanel}>
                <AppText style={styles.headerBtnTitle}>
                    {/* WOF Inspectors Only */}
                    Filter By:
                </AppText>
                <AppFormPicker items={searchOptions} selectedItem={selectedSearchOption} onChangeSelect={handleFilteredSearch} placeholder="ALL" />
            </View>
        </View>
    );


    return (
        <Screen>
            <ListItem
                image={require('../assets/logo.png')}
                title="Pilot Directory"
                description="Search for pilots, students &amp; WOF instructors using their PIN, Name or the Club. " />
            <Divider width={1} />

            <View style={styles.container}>
                <View style={styles.searchPanel}>
                    <AppTextInput onChangeText={search} placeholder="Search ..." />
                </View>
                <View style={styles.results}>

                    <SortPanel />

                    <Divider width={1} />

                    <FlatList style={{ height: Dimensions.get('window').height * .6 }}
                        data={filteredResults}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <ListItem
                                    title={item.name}
                                    description={'PIN: ' + item.pin + ' - ' + item.club + '\nMembership: ' + item.membershipLevel} />
                                <Divider />
                            </View>
                        )}
                    />

                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    results: {},
    searchPanel: {},
    searchTitle: {
        fontSize: 15,
        fontWeight: '700',
        margin: 17,
    },
    sortPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.white,
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
        width: '60%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerBtnTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 10,
        marginRight: 8,
    }
})
