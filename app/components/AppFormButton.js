import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFormikContext } from 'formik';

import AppButton from './AppButton';

export default function AppFormButton() {

    const { handleBlur, handleSubmit, handleChange, touched, setTouched, values, errors } = useFormikContext();

    return (
        <AppButton title="Submit" onPress={handleSubmit} />
    )
}

const styles = StyleSheet.create({})
