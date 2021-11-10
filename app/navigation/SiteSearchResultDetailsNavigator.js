import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SiteSearchResultDetailsScreen from '../screens/SiteSearchResultDetailsScreen';

import SiteSearchScreen from '../screens/SiteSearchScreen';


const Stack = createStackNavigator();
const SiteSearchResultDetailsNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="SiteSearch" component={SiteSearchScreen} options={{ title: 'Site Search' }} />
        <Stack.Screen name="SiteSearchResultDetails" component={SiteSearchResultDetailsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

export default SiteSearchResultDetailsNavigator;
