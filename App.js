import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './app/navigation/AuthNavigator';
import FeedScreen from './app/screens/FeedScreen';
import FeedDetailsScreen from './app/screens/FeedDetailsScreen';

export default function App() {

  return (
    // <NavigationContainer>
    //   <AuthNavigator />
    // </NavigationContainer>

    // <FeedScreen />
    <FeedDetailsScreen />
  );
}
