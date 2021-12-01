import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import { TouchableWithoutFeedback } from 'react-native'

import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ description, imageUrl, onPress, style, title, viewCount = 0 }) {
    const [liked, setLiked] = useState(false);

    const handleLikeImage = image => {
        console.log('liked the image');
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                <ImageBackground
                    source={{ uri: imageUrl }}
                    style={styles.image}>

                    <View style={styles.authorContainer}>
                        <MaterialCommunityIcons name="record" size={20} color={colors.danger} />
                        <AppText style={{ color: colors.white }}>57 views</AppText>
                    </View>

                    <TouchableWithoutFeedback onPress={handleLikeImage}>
                        <View style={styles.heartContainer}>
                            <MaterialCommunityIcons name="eye-outline" size={20} color={colors.background} />
                            <AppText style={{ color: colors.white }}>{viewCount} views</AppText>
                            <MaterialCommunityIcons name="heart-outline" size={20} color={colors.background} />
                        </View>
                    </TouchableWithoutFeedback>

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
    authorContainer: {
        position: 'absolute',
        top: 10,
        flex: 1,
        left: 5,
        flexDirection: 'row'
    },
    container: {
        width: '100%',
        height: 250,
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
        letterSpacing: .3,
        fontWeight: 'bold',
        color: colors.white,
        textTransform: 'capitalize',
        paddingBottom: 8,
    },
    heartContainer: {
        position: 'absolute',
        top: 10,
        flex: 1,
        right: 5,
        flexDirection: 'row'
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
