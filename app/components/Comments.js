import React from 'react'
import { FlatList, Text, StyleSheet, View, KeyboardAvoidingView, Button } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { TextInput } from 'react-native-gesture-handler'
import AppButton from './AppButton'
import AppTextInput from './AppTextInput'
import ListItem from './ListItem'

export default function Comments({ add = false, comments }) {


    return (
        <View style={styles.container}>
            <ListItem
                image={require('../assets/logo.png')}
                title="Comments"
                description="2021/02/2" />

            <View style={styles.commentsSection}>
                {comments.map(item => (
                    <ListItem
                        key={item.id}
                        description={item.comment}
                        title={item.author} />
                ))}
            </View>
            <View style={styles.editor}>
            {add &&
                <KeyboardAvoidingView style={styles.addCommentContainer}>
                    <AppTextInput style={{ marginBottom: 20 }} placeholder="Write a comment..." />
                    <AppButton title="Submit" />
                </KeyboardAvoidingView>
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addCommentContainer: {
        width: '100%',
        height: 100,
        marginBottom: 30
    },
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    commentsSection: {
    },
    editor: {
        width: '100%',
        padding: 10,
    }
})
