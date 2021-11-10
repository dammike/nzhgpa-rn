import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ChallengeSeriesScreen from '../screens/ChallengeSeriesScreen';
import FlyingSitesScreen from '../screens/FlyingSitesScreen';
import LiveTrackingScreen from '../screens/LiveTrackingScreen';
import SiteSearchScreen from '../screens/SiteSearchScreen';
import SiteSearchResultDetailsNavigator from './SiteSearchResultDetailsNavigator';


const Stack = createStackNavigator();
const FlyingSitesNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FlyingSiteScreen" component={FlyingSitesScreen} />
        <Stack.Screen name="SiteSearch" component={SiteSearchResultDetailsNavigator} options={{ title: 'Site Seadrch' }} />
        <Stack.Screen name="ChallengeSeries" component={ChallengeSeriesScreen} options={{ title: 'Challenge Series' }} />
        <Stack.Screen name="LiveTracking" component={LiveTrackingScreen} options={{ title: 'Live Tracking' }} />
    </Stack.Navigator>
);

export default FlyingSitesNavigator;
