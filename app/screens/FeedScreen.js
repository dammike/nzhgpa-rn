import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Divider } from 'react-native-elements'

import AppFormPicker from '../components/AppFormPicker'
import AppText from '../components/AppText'
import Card from '../components/Card'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors'
import feedsApi from '../api/feeds'
import ActivityLoader from '../components/ActivityLoader';
import RetryConnection from '../components/RetryConnection';

const filterOptions = [
    { title: 'MOST POPULAR', value: 'popularity' },
    { title: 'LATEST', value: 'latest' },
    { title: 'COMPETITIONS', value: 'competitions' },
];

const Header = () => (
    <>
        <ListItem
            image={require('../assets/logo.png')}
            title="Welcome, Dammike!"
            description="We are currently updating our App to enable LiveTracking. This feature will be updated as soon as possible!.." />

        <Divider width={1} color={colors.divider} />
    </>
);


export default function FeedScreen({ navigation }) {
    const [selectedFilter, setSelectedFilter] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [feeds, setFeeds] = useState();

    useEffect(() => {
        fetchFeeds();
    }, []);

    const fetchFeeds = async () => {
        setLoading(true);
        const response = await feedsApi.getFeeds();
        if (!response.ok) {
            setLoading(false);
            return setError(true)
        };
        setError(false);
        setFeeds(response.data);
        setLoading(false);
    }

    const filter = async (query) => {
        setSelectedFilter(query);

        // Return if All option is selected
        if (query.value === -1) {
            return fetchFeeds();
        }

        const response = await feedsApi.getFeedsBy(query.value);
        if (!response.ok) {
            setLoading(false);
            return setError(true);
        };
        setError(false);
        setFeeds(response.data);
        setLoading(false);
    }

    const SortPanel = () => (
        <View style={styles.sortPanel}>
            <View style={styles.headerBtnBox}>
                <AppText style={styles.headerBtnTitle}>
                    Filter by:
                </AppText>
                <AppFormPicker items={filterOptions} selectedItem={selectedFilter} onChangeSelect={filter} placeholder="Latest Posts" />
            </View>

            <View style={styles.headerPanel}>
                <AppText style={styles.headerPanelTxt}>Saved</AppText>
                <MaterialCommunityIcons name='heart' />
            </View>
        </View>
    );

    return (
        <Screen>
            {error &&
                <RetryConnection onPress={fetchFeeds} />
            }
            {(!error && loading) &&
                <ActivityLoader visible={loading} />
            }
            {feeds &&
                <>
                <FlatList
                    data={feeds}
                keyExtractor={item => item._id.toString()}
                ListHeaderComponent={SortPanel}
                renderItem={({ item }) => (
                    <Card
                        imageUrl={item.imageUrl}
                        title={item.title}
                        description={item.description}
                        onPress={() => navigation.navigate('FeedDetails', item)}
                        viewCount={item.viewCount}
                    />
                )}
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[0]}
                refreshing={loading}
                onRefresh={() => fetchFeeds()}
                />
                <Header />
                </>
            }
        </Screen>
    )
}

const styles = StyleSheet.create({
    sortPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.white,
    },
    headerBtnBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBtnTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 10,
        marginRight: 8,
    },
    headerPanel: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerPanelTxt: {
        fontSize: 16,
    }
})
