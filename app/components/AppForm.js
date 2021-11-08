import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';

export default function AppForm({ children, validationSchema, initialValues }) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values)}
        >
            <>{children}</>
        </Formik>
    )
}

const styles = StyleSheet.create({})
