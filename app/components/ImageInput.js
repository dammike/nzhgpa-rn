import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker';

export default function ImageInput({ imageURI, onChangeImage }) {

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (!granted) {
                    Alert.alert('Permission Denied...', 'Please allow media access permissions on your phone to upload images.');
                }
            }
        })();
    }, []);

    const loadImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: .5
            });
            if (!result.cancelled) onChangeImage(result.uri);
        } catch (error) {
            console.error('Error occurred while loading image', error);
        }
    }

    const handlePress = () => {
        if (!imageURI) loadImage();
        else Alert.alert('Delete Image', 'Are you sure you want to delete this image?', [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No' }
        ]);
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageURI &&
                    <MaterialCommunityIcons name="camera" size={40} color={colors.black} />
                }
                {imageURI &&
                    <Image source={{ uri: imageURI }} style={styles.image} />
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderRadius: 15,
        backgroundColor: colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
})
