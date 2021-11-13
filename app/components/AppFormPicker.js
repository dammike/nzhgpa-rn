import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Button } from 'react-native';
import { Modal } from 'react-native';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import AppText from './AppText';
import ListItem from './ListItem';

export default function AppFormPicker({ summary, items, selectedItem, onChangeSelect, placeholder = 'Select', style }) {
    const [visible, setVisible] = useState(false);

    const handleSelect = item => {
        onChangeSelect(item);
        setVisible(false);
    }

    return (
        <View style={[styles.container, style]}>
            {selectedItem &&
                <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                    <View style={styles.selectBox}>
                        <AppText style={styles.selectBoxTxt}>{selectedItem.title}</AppText>
                        <MaterialCommunityIcons name="chevron-down" size={15} />
                    </View>
                </TouchableWithoutFeedback>
            }
            {!selectedItem &&
                <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                    <View style={styles.selectBox}>
                        <AppText style={styles.selectBoxTxt}>{placeholder}</AppText>
                        <MaterialCommunityIcons name="chevron-down" size={15} />
                    </View>
                </TouchableWithoutFeedback>
            }

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
                    {items.map(item =>
                        <TouchableWithoutFeedback onPress={() => handleSelect(item)}>
                            <View key={item.value}>
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
    },
    selectBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    selectBoxTxt: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        letterSpacing: .5,
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
