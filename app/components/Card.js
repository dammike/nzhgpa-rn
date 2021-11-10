import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ description, image, onPress, title }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
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
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: colors.grey,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 12,
        elevation: 10,
    },
    description: {
        fontSize: 14,
        textShadowColor: colors.white,
        textShadowRadius: 50,
        textDecorationColor: colors.white,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
        textTransform: 'capitalize',
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
