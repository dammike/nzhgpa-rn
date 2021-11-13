import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

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

    var feed = route.params;

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[1]}
            >
                <ImageBackground source={feed.image} style={styles.image} />

                <ListItem style={styles.headerListItem}
                    image={require('../assets/profile.jpeg')}
                    title={feed.title}
                    description={feed.description} />

                <View style={styles.articleContainer}>
                    <AppText style={feed.articleText}>
                        {feed.article}
                    </AppText>
                </View>


                <View style={styles.commentSection}>
                    <Comments add={true} comments={commentData} />
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
        height: 400,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
    },
})
