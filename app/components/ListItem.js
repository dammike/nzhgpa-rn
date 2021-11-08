import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem() {
    return (
        <View style={styles.listContainer}>
            <View style={styles.photoContainer}>
                <Image source={require('../assets/profile.jpeg')} style={styles.image} />
            </View>

            <View style={styles.txtContainer}>
                <AppText
                    numberOfLines={2}
                    style={styles.title}>Paragliding Fun Comps in auckland</AppText>
                <AppText
                    numberOfLines={2}
                    style={styles.description}>Join in for the fun on the 27th of May 2022. Limited Spaces available. So Hurry!</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    description: {
        fontSize: 14,
    },
    title: {
        fontSize: 16,
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        zIndex: 100,
    },
    photoContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'yellow',
        top: 10,
        overflow: 'hidden',
    },
    txtContainer: {
        padding: 10,
        flex: 1,
        justifyContent: 'center'

    },
    listContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.grey,
    }
})
