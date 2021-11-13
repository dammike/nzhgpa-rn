import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChallengeSeriesScreen from '../screens/ChallengeSeriesScreen';
import FlyingSitesScreen from '../screens/FlyingSitesScreen';
import HallOfFame from '../screens/HallOfFame';
import LiveTrackingScreen from '../screens/LiveTrackingScreen';
import SiteSearchNavigator from './SiteSearchNavigator';


const Stack = createStackNavigator();
const FlyingSitesNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FlyingSites" component={FlyingSitesScreen} />
        <Stack.Screen name="SiteSearchNavigator" component={SiteSearchNavigator} options={{ title: 'Site Search' }} />
        <Stack.Screen name="LiveTracking" component={LiveTrackingScreen} options={{ title: 'Live Tracking' }} />
        <Stack.Screen name="ChallengeSeries" component={ChallengeSeriesScreen} options={{ title: 'Challenge Series' }} />
        <Stack.Screen name="HallOfFame" component={HallOfFame} options={{ title: 'Hall of Fame' }} />
    </Stack.Navigator>
);

export default FlyingSitesNavigator;
