import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import colors from '../config/colors';
import FeedNavigator from '../navigation/FeedNavigator';
import ContributeScreen from '../screens/ContributeScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import DownloadsScreen from '../screens/DownloadsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SupportScreen from '../screens/SupportScreen';
import AirsNavigator from './AirsNavigator';
import FlyingSitesNavigator from './FlyingSitesNavigator';



const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: colors.secondary,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
        tabBarHideOnKeyboard: true,
    }}>
        <Tab.Screen
            name='Feeds'
            component={FeedNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='newspaper-plus' color={color} size={size} />
            }} />
        <Tab.Screen
            name='FLYING SITES'
            component={FlyingSitesNavigator} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='racing-helmet' color={color} size={size} />
            }} />
        <Tab.Screen
            name='UPLOAD'
            component={ContributeScreen} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='camera-gopro' color={color} size={size} />
            }} />
        <Tab.Screen
            name='AIRS'
            component={AirsNavigator}
            options={{
                headerShown: false,
                tabBarLabel: 'AIRS',
                tabBarBadge: 2,
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='bandage' color={color} size={size} />
            }} />
        <Tab.Screen
            name='DOWNLOADS'
            component={DownloadsScreen} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='cloud-download' color={color} size={size} />
            }} />
        <Tab.Screen
            name='DIRECTORY'
            component={DirectoryScreen} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='account-search' color={color} size={size} />
            }} />
        <Tab.Screen
            name='SUPPORT'
            component={SupportScreen} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='card-account-details-star' color={color} size={size} />
            }} />
        <Tab.Screen
            name='SETTINGS'
            component={SettingsScreen} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='content-save-cog' color={color} size={size} />
            }} />
    </Tab.Navigator>
);
export default AppNavigator;
