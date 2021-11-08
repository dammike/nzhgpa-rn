import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AppButton from '../components/AppButton';

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import IconComponent from '../components/IconComponent';

export default function LoginScreen() {
    return (
        <Screen>
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
            <AppButton title="Submit" onPress={() => console.log('submit')} />
        </Screen>
    )
}

const styles = StyleSheet.create({

})
