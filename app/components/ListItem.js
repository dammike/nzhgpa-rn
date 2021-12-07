import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem({
    IconComponent,
    description,
    image,
    imageBgColor = colors.black,
    style,
    subtitle,
    title }) {

    return (
        <View style={[styles.listContainer, style]}>
            {image &&
                <View style={{ justifyContent: 'center' }}>
                    <View style={[styles.photoContainer, { backgroundColor: imageBgColor }]}>
                        <Image source={image} style={styles.image} />
                    </View>
                </View>
            }
            {(!image && IconComponent) &&
                < View style={{ justifyContent: 'center' }}>
                    <View style={[styles.photoContainer, { backgroundColor: imageBgColor }]}>
                        {IconComponent}
                    </View>
                </View>
            }
            <View style={styles.txtContainer}>
                <AppText
                    numberOfLines={2}
                    style={styles.title}>{title}
                </AppText>

                {subtitle &&
                    <AppText
                        numberOfLines={1}
                        style={styles.subtitle}>{subtitle}
                    </AppText>
                }

                {description &&
                    <AppText
                    numberOfLines={3}
                    style={styles.description}>{description}
                </AppText>
                }
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
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        textTransform: 'capitalize'
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
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        elevation: 5,
        borderColor: colors.divider,
        borderWidth: 1,
        marginLeft: -13,
        marginRight: 20,
    },
    txtContainer: {
        flex: 1,
        justifyContent: 'center'

    },
    listContainer: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingBottom: 8,
        backgroundColor: colors.white,
        height: 100,
    }
})
