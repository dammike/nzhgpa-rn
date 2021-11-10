import React from 'react'
import { FlatList, Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { TextInput } from 'react-native-gesture-handler'
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

            {add &&
                <KeyboardAvoidingView style={styles.addCommentContainer}>
                    <TextInput placeholder="Add a comment..." />
                </KeyboardAvoidingView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    addCommentContainer: {

        width: '100%',
        height: 200,
        backgroundColor: 'red',
        margin: 20,
    },
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    commentsSection: {
    }
})
