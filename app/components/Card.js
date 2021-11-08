import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ description, image, onPress, title, }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <ImageBackground
                    source={image}
                    style={styles.image}>

                    <View style={styles.txtContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.description}>{description}</AppText>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: colors.grey,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 24,
    },
    description: {
        fontSize: 14,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        justifyContent: 'flex-end',
    },
    txtContainer: {
        marginHorizontal: 8,
        marginBottom: 18,
    },
})
