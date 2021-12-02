import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';

export default function AppForm({ children, validationSchema, initialValues, onSubmit }) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <>{children}</>
        </Formik>
    )
}

const styles = StyleSheet.create({})
