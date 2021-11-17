import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppButton from './AppButton'
import AppTextInput from './AppTextInput'
import ListItem from './ListItem'

export default function Comments({ add = false, handleNewComment, inputText, comments, onTextInputChange }) {
    return (
        <View style={styles.container}>
            <ListItem
                image={require('../assets/logo.png')}
                title="Comments"
                description="2021/02/2"
            />

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
                    <View style={styles.addCommentContainer}>
                        <AppTextInput
                            onChangeText={onTextInputChange}
                            placeholder="Write a comment..."
                            style={{ marginBottom: 20 }}
                            value={inputText}
                        />
                        <AppButton title="Submit" onPress={handleNewComment} />
                    </View>
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
