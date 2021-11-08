import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FlyingSitesScreen from '../screens/FlyingSitesScreen';
import ContributeScreen from '../screens/ContributeScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import AirsScreen from '../screens/AirsScreen';
import DownloadsScreen from '../screens/DownloadsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SupportScreen from '../screens/SupportScreen';

import FeedNavigator from '../navigation/FeedNavigator';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: colors.secondary,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
    }}>
        <Tab.Screen
            name='Feeds'
            component={FeedNavigator}
            options={{
                headerShown: false,
                tabBarIcon: () =>
                    <MaterialCommunityIcons name='newspaper-plus' color={colors.white} size={30} />
            }} />
        <Tab.Screen
            name='FLYING SITES'
            component={FlyingSitesScreen} options={{
                headerShown: false,
                tabBarIcon: () =>
                    <MaterialCommunityIcons name='crosshairs-gps' color={colors.white} size={30} />
            }} />
        <Tab.Screen
            name='SETTINGS'
            component={SettingsScreen} options={{
                headerShown: false,
                tabBarIcon: () =>
                    <MaterialCommunityIcons name='content-save-cog' color={colors.white} size={30} />
            }} />
        <Tab.Screen
            name='DOWNLOADS'
            component={DownloadsScreen} options={{
                headerShown: false,
                tabBarIcon: () =>
                    <MaterialCommunityIcons name='cloud-download' color={colors.white} size={30} />
            }} />
        <Tab.Screen
            name='AIRS'
            component={AirsScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'AIRS',
                tabBarIcon: () =>
                    <MaterialCommunityIcons name='bandage' color={colors.white} size={30} />
            }} />
        <Tab.Screen
            name='UPLOAD'
            component={ContributeScreen} options={{
                headerShown: false,
                tabBarIcon: () =>
                    <MaterialCommunityIcons name='camera-gopro' color={colors.white} size={30} />
            }} />
        <Tab.Screen
            name='DIRECTORY'
            component={DirectoryScreen} options={{
                headerShown: false,
                tabBarIcon: () =>
                    <MaterialCommunityIcons name='account-search' color={colors.white} size={30} />
            }} />
        <Tab.Screen
            name='SUPPORT'
            component={SupportScreen} options={{
                headerShown: false,
                tabBarIcon: () =>
                    <MaterialCommunityIcons name='hand-okay' color={colors.white} size={30} />
            }} />
    </Tab.Navigator>
);
export default AppNavigator;
