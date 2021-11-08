import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';

export default function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={3}
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <AppText style={styles.tagLine}>NEW ZEALAND HANG GLIDING &amp; PARAGLIDING ASSOCIATION</AppText>
            </View>

            <AppButton title="LOGIN" style={styles.loginBtn} />
            <AppButton title="REGISTER" style={styles.registerBtn} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
    },
    loginBtn: {
        backgroundColor: colors.primary,
    },
    logo: {
        height: 120,
        // aspectRatio: 6 / 3,
        resizeMode: 'contain',
        width: '100%',
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 50,
    },
    registerBtn: {
        backgroundColor: colors.secondary,
    },
    tagLine: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center',
    }
})
