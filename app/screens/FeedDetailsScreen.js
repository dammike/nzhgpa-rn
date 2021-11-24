import React, { useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import WebView from 'react-native-webview';

import AppText from '../components/AppText'
import Comments from '../components/Comments'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

const commentData = [
    { id: 1, author: 'Peter Jackson', comment: 'I think its a great idea', timestamp: '2021-11-20' },
    { id: 2, author: 'Anna Riley', comment: 'Cool!', timestamp: '2021-11-20' },
    { id: 3, author: 'Winnie Gordon', comment: 'Not very happy with this.. Grrr', timestamp: '2021-11-20' },
];

export default function FeedDetailsScreen({ route }) {
    const [comments, setComments] = useState(commentData);
    const [commentTxt, setCommentText] = useState('');

    var feed = route.params;

    const handleNewComment = () => {
        if (commentTxt === '') return;
        try {
            setComments([...comments,
            {
                id: comments.length + 1,
                author: 'Dammike Saman',
                comment: commentTxt
            }
            ]);
            setCommentText('');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[1]}
            >
                <ImageBackground source={{ uri: feed.imageUrl }} style={styles.image} />

                <ListItem style={styles.headerListItem}
                    image={require('../assets/profile.jpeg')}
                    title={feed.title}
                    description={feed.description} />

                <View style={styles.articleContainer}>
                    <AppText style={feed.articleText}>
                        {feed.article}
                    </AppText>
                </View>
                {/* <WebView
                    originWhitelist={['*']}
                    source={{ html: '<h1>This is a static HTML source!</h1>' }}
                /> */}

                <View
                    style={styles.commentSection}>
                    <Comments
                        add={true}
                        comments={comments}
                        handleNewComment={handleNewComment}
                        inputText={commentTxt}
                        onTextInputChange={setCommentText}
                    />
                </View>

                <Divider width={1} />

                <View style={styles.footerSection}>
                    <ListItem
                        title="Contact hours: 2-5pm"
                        description="Feel free to send a message to Derek at derek@gmail.com" />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    articleContainer: {
        paddingHorizontal: 25,
        marginBottom: 45,
    },
    articleText: {
        color: colors.black,
    },
    container: {
        flex: 1,
    },
    commentSection: {
        paddingBottom: 20,
    },
    footerSection: {
        paddingTop: 30,
    },
    headerListItem: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 1,
        paddingTop: 15,
        backgroundColor: colors.white,
        top: -70,
    },
    image: {
        width: '100%',
        height: 350,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
    },
})
