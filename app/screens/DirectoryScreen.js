import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-elements';

import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput'
import ListItem from '../components/ListItem';
import Screen from '../components/Screen'

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

export default function DirectoryScreen() {

    const [filteredResults, setFilteredResults] = useState(pilots);


    const search = (searchText) => {
        setFilteredResults(pilots.filter(item => (item.name.toLowerCase().includes(searchText.toLowerCase()))));
    }

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
                    <AppText style={styles.searchTitle}>{filteredResults.length} Results</AppText>
                    <Divider width={1} />

                    <ScrollView style={{ flexGrow: 1 }}>
                        {filteredResults.map(pilot => (
                                <>
                                    <ListItem
                                        key={pilot.id}
                                        title={pilot.name}
                                    description={'PIN: ' + pilot.pin + ' - ' + pilot.club + '\nMembership: ' + pilot.membershipLevel}
                                    />
                                    <Divider />
                                </>
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
    }
})
