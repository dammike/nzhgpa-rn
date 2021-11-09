import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import AirsFormScreen from './app/screens/AirsFormScreen';



export default function App() {

  return (
    // <NavigationContainer>
    //   <AuthNavigator />
    // </NavigationContainer>

    // <FeedScreen />
    // <FeedDetailsScreen />

    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

    // <AirsFormScreen />
  );
}
