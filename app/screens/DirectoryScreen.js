import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Divider } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import AppFormPicker from '../components/AppFormPicker';

import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput'
import ListItem from '../components/ListItem';
import Screen from '../components/Screen'
import colors from '../config/colors';
import pilotsApi from '../api/pilots';
import RetryConnection from '../components/RetryConnection';

const searchOptions = [
    { title: 'Pilots', value: "pilot" },
    { title: 'WOF Inspectors', value: "wof-inspector" },
    { title: 'PG Schools', value: "pg-school" },
    { title: 'HG Schools', value: "hg-school" }
];


export default function DirectoryScreen() {
    const [results, setResults] = useState();
    const [filteredResults, setFilteredResults] = useState([]);
    const [group, setGroup] = useState();
    const [searchTxt, setSearchTxt] = useState('');
    const [selectedSearchOption, setSelectedSearchOption] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = async () => {
        const response = await pilotsApi.getPilots();
        if (!response.ok) return setError(true);
        setError(false);
        setResults(response.data);
        setFilteredResults(response.data);
        setGroup(response.data);
    }

    const search = (txt) => {
        setSearchTxt(txt);
        setFilteredResults(group.filter(item =>
            (item.name.toLowerCase().includes(txt.toLowerCase()))
        ));
    }

    const changeFilter = item => {
        setSearchTxt('');

        switch (item.value) {
            case "pilot":
                const onlyPilots = results.filter(p => p.type === item.value);
                setFilteredResults(onlyPilots);
                setGroup(onlyPilots);
                break;

            case "wof-inspector":
                const onlyWof = results.filter(p => p.type === item.value);
                setFilteredResults(onlyWof);
                setGroup(onlyWof);
                break;

            case "pg-school":
                const onlyPgSchools = results.filter(p => p.type === item.value);
                setFilteredResults(onlyPgSchools);
                setGroup(onlyPgSchools);
                break;

            case "hg-school":
                const onlyHgSchools = results.filter(p => p.type === item.value);
                setFilteredResults(onlyHgSchools);
                setGroup(onlyHgSchools);
                break;

            default:
                fetchResults();
        }

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
                <AppFormPicker items={searchOptions} selectedItem={selectedSearchOption} onChangeSelect={changeFilter} placeholder="ALL" />
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
                    <AppTextInput value={searchTxt} onChangeText={search} placeholder="Search ..." />
                </View>
                <View style={styles.results}>
                    <SortPanel />
                    <Divider width={1} />
                    {error &&
                        <RetryConnection onPress={fetchResults} />
                    }

                    <FlatList style={{ height: Dimensions.get('window').height * .57 }}
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
