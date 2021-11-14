import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import colors from '../config/colors';
import AppText from './AppText';
import ListItem from './ListItem';

export default function Section({ title, description, IconComponent }) {
    return (

        <>
            <ListItem
                IconComponent={IconComponent}
                title={title}
            />
            <Divider width={1} color={colors.divider} />
            {description &&
                <View>
                    <AppText style={styles.description}>{description}</AppText>
                </View>
            }
        </>
    );

}

const styles = StyleSheet.create({
    description: {
        backgroundColor: colors.white,
        padding: 20,
        fontSize: 16,
        textAlign: 'left',
    }
})
