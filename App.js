import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import * as ImagePicker from 'expo-image-picker';
import ContributeScreen from './app/screens/ContributeScreen';

export default function App() {

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
