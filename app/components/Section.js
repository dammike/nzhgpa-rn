import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import colors from '../config/colors';
import AppText from './AppText';
import ListItem from './ListItem';

export default function Section({ title, bgColor, description, IconComponent }) {
    return (
        <>
            <ListItem
                imageBgColor={bgColor}
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
