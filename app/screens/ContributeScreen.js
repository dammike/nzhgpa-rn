import React, { useState, useEffect } from 'react';
import { Button, Image, Platform, StyleSheet, Text, View } from 'react-native';

import Screen from '../components/Screen';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import ImageInput from '../components/ImageInput';

export default function ContributeScreen() {
    const [imageURI, setImageURI] = useState();

    return (
        <Screen>
            <ImageInput imageURI={imageURI} onChangeImage={uri => setImageURI(uri)} />
        </Screen>
    )
}

const styles = StyleSheet.create({})
