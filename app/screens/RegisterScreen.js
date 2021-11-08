import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import IconComponent from '../components/IconComponent';
import Screen from '../components/Screen';
import colors from '../config/colors';



export default function RegisterScreen() {
    return (
        <Screen>
            <AppTextInput
                autoFocus
                keyboardType={'number-pad'}
                maxLength={5}
                placeholder="Pilot PIN"
                IconComponent={<IconComponent name="account-supervisor" />} />
            <AppTextInput
                autoCorrect={false}
                keyboardType={'email-address'}
                maxLength={55}
                placeholder="Email"
                textContentType={'emailAddress'}
                IconComponent={<IconComponent name="email" />} />
            <AppTextInput
                autoComplete={false}
                autoCorrect={false}
                maxLength={55}
                placeholder="Password"
                IconComponent={<IconComponent name="lock" />}
                secureTextEntry />
            <AppTextInput
                autoComplete={false}
                autoCorrect={false}
                maxLength={55}
                placeholder="Confirm Password"
                IconComponent={<IconComponent name="lock-outline" />}
                secureTextEntry />

            <AppButton backgroundColor={colors.secondary} title="Submit" onPress={() => console.log('register submit')} />

        </Screen>
    )
}

const styles = StyleSheet.create({})
