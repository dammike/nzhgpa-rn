import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AirsScreen from '../screens/AirsScreen';
import AirsFormScreen from '../screens/AirsFormScreen';

const Stack = createStackNavigator();
const AirsNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Airs" component={AirsScreen} options={{ headerTitle: 'Accident/Incident Reporting System' }} />
        <Stack.Screen name="AirsForm" component={AirsFormScreen} options={{ headerTitle: 'AIRS - Create a New Report' }} />
    </Stack.Navigator>
);

export default AirsNavigator;