import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
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

                    <View style={[styles.txtContainer, styles.transparentBG]}>
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
        fontSize: 13,
        color: colors.white,
        textShadowColor: colors.white,
        textShadowRadius: 50,
        textDecorationColor: colors.white,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white,
        textTransform: 'capitalize',
        paddingBottom: 8,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        justifyContent: 'flex-end',
    },
    txtContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.grey,
        height: '40%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        // opacity: .3,
    },
    transparentBG: {
        backgroundColor: '#00000050',
        color: '#FFFFFF'
    }
})
