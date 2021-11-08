import React from 'react';
import { StyleSheet } from 'react-native';

import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';
import AppTextInput from './AppTextInput';
import IconComponent from './IconComponent';

export default function AppFormField({ param, placeholder, iconName }) {

    const { handleBlur, handleSubmit, handleChange, touched, setTouched, values, errors } = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setTouched(param)}
                onChangeText={handleChange(param)}
                placeholder={placeholder}
                IconComponent={<IconComponent name={iconName} />}
            />
            {<ErrorMessage error={errors[param]} visible={touched[param]} />}
        </>
    )
}

const styles = StyleSheet.create({})
