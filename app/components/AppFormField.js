import React from 'react';
import { StyleSheet } from 'react-native';

import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';
import AppTextInput from './AppTextInput';
import IconComponent from './IconComponent';
import colors from '../config/colors';

export default function AppFormField({ param, placeholder, iconName, value, ...otherProps }) {

    const { handleChange, touched, setTouched, values, errors } = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setTouched(param)}
                onChangeText={handleChange(param)}
                placeholder={placeholder}
                IconComponent={<IconComponent name={iconName} color={colors.black} />}
                value={value}
                {...otherProps}
            />
            {<ErrorMessage error={errors[param]} visible={touched[param]} />}
        </>
    )
}

const styles = StyleSheet.create({})
