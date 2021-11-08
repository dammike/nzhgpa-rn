import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AppButton from '../components/AppButton';

import AppInput from '../components/AppInput';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../config/colors';

export default function LoginScreen() {
    return (
        <Screen>
            <AppInput placeholder="Email" />
            <AppInput placeholder="Password" />
            <AppButton title="Submit" onPress={() => console.log('submit')} />
        </Screen>
    )
}

const styles = StyleSheet.create({

})
