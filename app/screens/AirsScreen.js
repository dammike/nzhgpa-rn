import React, { useState, useEffect } from 'react';
import { Button, Dimensions, FlatList, Modal, ScrollView, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import moment from 'moment';

import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';
import airsApi from '../api/airs';
import ListItem from '../components/ListItem';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import IconComponent from '../components/IconComponent';

export default function AirsScreen({ navigation }) {
    const [results, setResults] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = async () => {
        setLoading(true);
        const response = await airsApi.getAirs();
        if (!response.ok) {
            setLoading(false);
            return setError(true)
        }
        setError(false);
        setResults(response.data);
        setLoading(false);
    }

    return (
        <Screen>
            <AppButton
                iconName="format-color-highlight"
                backgroundColor={colors.safe}
                title="New Report"
                onPress={() => navigation.navigate('AirsForm')}
            />

            <View style={styles.reportsContainer}>
                <FlatList style={{ height: Dimensions.get('window').height * .67 }}
                    data={results}
                    keyExtractor={item => item._id.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableWithoutFeedback onPress={() => {
                            setModalVisible(true),
                                setSelectedItem(item);
                        }}>
                            <View>
                                <ListItem
                                    title={index + 1 + '. ' + item.region + ' (' + item.typeOfOccurance + ')'}
                                    description={
                                        'Date: ' + moment(item.date).format('DD-MM-YYYY')
                                        + ' / Time: ' + moment(item.time).format('HH : mm')
                                        + '\n' + item.whatHappened
                                    }
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    ItemSeparatorComponent={() => <Divider />}
                    refreshing={loading}
                    onRefresh={() => fetchResults()}
                />
            </View>

            <Modal
                animationType="slide"
                // transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                <Button onPress={() => setModalVisible(false)} title="Close" />
                <ScrollView style={styles.scrollView} >
                    <View style={styles.summary}>
                        {selectedItem &&
                            <>
                                <ListItem
                                    title={selectedItem.region + ' ' + selectedItem.typeOfOccurance}
                                    description={
                                        'Date: ' + moment(selectedItem.date).format('DD-MM-YYYY') + ' / Time: ' + moment(selectedItem.time).format('HH : mm')}
                                IconComponent={<IconComponent name="bandage" />}
                            />
                                <ListItem title="Summary" description={selectedItem.whatHappened} />
                                <ListItem title="Aircraft Type" description={selectedItem.aircraftType} />
                                <ListItem title="Pilot Rating" description={selectedItem.pilotCertificate} />
                                <ListItem title="Other Info" description={selectedItem.otherInfo} />
                                <ListItem title="Pilot Experience" description={selectedItem.pilotExperience} />
                                <ListItem title="Site Location" description={selectedItem.siteLocation} />
                                <ListItem title="Site Familiarity" description={selectedItem.siteFamiliarity} />
                                <ListItem title="Degree of Injury" description={selectedItem.degreeOfInjury} />
                                <ListItem title="Location of Main Injury" description={selectedItem.locationOfMainInjury} />
                                <ListItem title="Other Injury Details" description={selectedItem.otherInjuryDetails} />
                                <ListItem title="Glider Damage" description={selectedItem.gliderDamage} />
                                <ListItem title="Purpose of Flight" description={selectedItem.purposeOfFlight} />
                                <ListItem title="Phase of Flight" description={selectedItem.phaseOfFlight} />
                                <ListItem title="Helmet" description={selectedItem.helmet} />
                                <ListItem title="Harness" description={selectedItem.harness} />
                                <ListItem title="Reserve" description={selectedItem.reserve} />
                                <ListItem title="Wind Speed" description={selectedItem.windSpeed} />
                                <ListItem title="Wind Direction" description={selectedItem.windDirection} />
                                <ListItem title="Wind Condition" description={selectedItem.windConditions} />
                            </>
                        }
                    </View>
                </ScrollView>
            </Modal>
        </Screen>
    )
}

const styles = StyleSheet.create({
    reportsContainer: {
        marginTop: 10
    },
    summary: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    }
})
