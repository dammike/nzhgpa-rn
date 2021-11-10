import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ChallengeSeriesScreen from '../screens/ChallengeSeriesScreen';
import FlyingSitesScreen from '../screens/FlyingSitesScreen';
import HallOfFame from '../screens/HallOfFame';
import LiveTrackingScreen from '../screens/LiveTrackingScreen';
import SiteSearchScreen from '../screens/SiteSearchScreen';
import SiteSearchResultDetailsNavigator from './SiteSearchResultDetailsNavigator';


const Stack = createStackNavigator();
const FlyingSitesNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FlyingSiteScreen" component={FlyingSitesScreen} />
        <Stack.Screen name="SiteSearch" component={SiteSearchResultDetailsNavigator} options={{ title: 'Site Seadrch' }} />
        <Stack.Screen name="LiveTracking" component={LiveTrackingScreen} options={{ title: 'Live Tracking' }} />
        <Stack.Screen name="ChallengeSeries" component={ChallengeSeriesScreen} options={{ title: 'Challenge Series' }} />
        <Stack.Screen name="HallOfFame" component={HallOfFame} options={{ title: 'Hall of Fame' }} />
    </Stack.Navigator>
);

export default FlyingSitesNavigator;
