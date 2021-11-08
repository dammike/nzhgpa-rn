import React from 'react'

import FeedScreen from '../screens/FeedScreen';
import FeedDetailsScreen from '../screens/FeedDetailsScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false, }} >
        <Stack.Screen name='Feed' component={FeedScreen} />
        <Stack.Screen name='FeedDetails' component={FeedDetailsScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;