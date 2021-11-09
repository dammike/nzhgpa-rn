import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FlyingSitesScreen from '../screens/FlyingSitesScreen';
import LiveTrackingScreen from '../screens/LiveTrackingScreen';
import SiteSearchScreen from '../screens/SiteSearchScreen';


const Stack = createStackNavigator();
const FlyingSitesNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="FlyingSiteScreen" component={FlyingSitesScreen} />
        <Stack.Screen name="SiteSearch" component={SiteSearchScreen} options={{ title: 'Site Search' }} />
        <Stack.Screen name="LiveTracking" component={LiveTrackingScreen} options={{ title: 'Live Tracking' }} />
    </Stack.Navigator>
);

export default FlyingSitesNavigator;
