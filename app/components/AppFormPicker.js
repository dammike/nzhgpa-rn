import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Button } from 'react-native';
import { Modal } from 'react-native';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import colors from '../config/colors';
import AppText from './AppText';
import ListItem from './ListItem';

export default function AppFormPicker({ IconComponent, summary, items, selectedItem, onChangeSelect, placeholder = 'Select', style }) {
    const [visible, setVisible] = useState(false);

    const reset = () => {
        onChangeSelect({ title: 'All', value: -1 });
        setVisible(false);
    }

    const handleSelect = item => {
        onChangeSelect(item);
        setVisible(false);
    }

    return (
        <View style={[styles.container, style]}>
            <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                <View style={styles.selectBox}>
                    <>
                    {IconComponent}
                        <AppText style={styles.selectBoxTxt}>
                            {selectedItem ? selectedItem.title : placeholder}
                        </AppText>
                    </>
                    <>
                        <MaterialCommunityIcons name="chevron-down" size={15} />
                    </>
                </View>
            </TouchableWithoutFeedback>

            <Modal animationType="slide" visible={visible}>
                <Button onPress={() => setVisible(false)} title="Close" />
                <View style={styles.summary}>
                    {summary &&
                        <AppText style={styles.summaryTxt}>
                            {summary}
                        </AppText>
                    }
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={() => reset()}>
                        <View>
                            <ListItem title="All" value="-1" />
                        </View>
                    </TouchableWithoutFeedback>
                    {items.map(item =>
                        <TouchableWithoutFeedback key={item.value} onPress={() => handleSelect(item)}>
                            <View>
                                <ListItem title={item.title} description="Select to view region" />
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f4f7',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: '#f7f7f7',
        elevation: 5,
        marginVertical: 8,
    },
    selectBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    selectBoxTxt: {
        // textDecorationLine: 'underline',
        paddingLeft: 5,
        fontWeight: 'bold',
        letterSpacing: .9,
    },
    summary: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    summaryTxt: {
        fontWeight: '700',
        fontSize: 20,
    }
})
