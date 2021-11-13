import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Divider } from 'react-native-elements';
import AppFormPicker from '../components/AppFormPicker';

import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput'
import ListItem from '../components/ListItem';
import Screen from '../components/Screen'
import colors from '../config/colors';

const pilots = [
    {
        id: 1,
        name: "Peter James",
        pin: "7006",
        club: "Auckland Hang Gliding & Paragliding Club",
        membershipLevel: 'FULL'
    },
    {
        id: 2,
        name: "Mark Walters",
        pin: "1206",
        club: "Wellington Hang Gliding & Paragliding Club",
        membershipLevel: 'FULL'
    },
    {
        id: 3,
        name: "Leila Cooper",
        pin: null,
        club: null,
        membershipLevel: 'STUDENT'
    },
    {
        id: 4,
        name: "Chrigel Mauer",
        pin: 3009,
        club: null,
        membershipLevel: 'FULL'
    },
    {
        id: 5,
        name: "Dammike Saman",
        pin: 1001,
        club: null,
        membershipLevel: 'STUDENT'
    }
    ,
    {
        id: 6,
        name: "Amy Rose",
        pin: 1001,
        club: null,
        membershipLevel: 'STUDENT'
    },
    {
        id: 7,
        name: "Jack Lambert",
        pin: 1001,
        club: null,
        membershipLevel: 'STUDENT'
    }
];

const searchOptions = [
    { title: 'Pilots', value: 1 },
    { title: 'WOF Inspectors', value: 2 },
    { title: 'PG Schools', value: 3 },
    { title: 'HG Schools', value: 4 }
];


export default function DirectoryScreen() {
    const [filteredResults, setFilteredResults] = useState(pilots);
    const [selectedSearchOption, setSelectedSearchOption] = useState();

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
                        {filteredResults.length} Results
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

                    <ScrollView style={{ flexGrow: 1 }}>
                        {filteredResults.map(pilot => (
                            <View key={pilot.id}>
                                <ListItem
                                    title={pilot.name}
                                    description={'PIN: ' + pilot.pin + ' - ' + pilot.club + '\nMembership: ' + pilot.membershipLevel} />
                                <Divider />
                            </View>
                            ))}
                    </ScrollView>
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
