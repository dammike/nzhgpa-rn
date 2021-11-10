import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem({ description, image, style, title }) {
    return (
        <View style={[styles.listContainer, style]}>
            {image &&
                <View style={{ justifyContent: 'center' }}>
                <View style={styles.photoContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                </View>
            }
            <View style={styles.txtContainer}>
                <AppText
                    numberOfLines={2}
                    style={styles.title}>{title}</AppText>
                <AppText
                    numberOfLines={3}
                    style={styles.description}>{description}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    description: {
        fontSize: 14,
    },
    title: {
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        zIndex: 100,
    },
    photoContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: colors.black,
        overflow: 'hidden',
        elevation: 5,
        borderColor: colors.primary,
        borderWidth: 5,
        marginLeft: -13,
        marginRight: 10,
    },
    txtContainer: {
        paddingHorizontal: 10,
        flex: 1,
        justifyContent: 'center'

    },
    listContainer: {
        flexDirection: 'row',
        padding: 25,
        backgroundColor: colors.white,
    }
})
