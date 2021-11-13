import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import * as ImagePicker from 'expo-image-picker';
import ContributeScreen from './app/screens/ContributeScreen';
import AppText from './app/components/AppText';
import Screen from './app/components/Screen';
import { TouchableWithoutFeedback } from 'react-native';
import { Button, Modal } from 'react-native';
import { View } from 'react-native';
import AppPicker from './app/components/AppFormPicker';
import AppFormPicker from './app/components/AppFormPicker';


const items = [
  { title: 'Auckland', value: 1 },
  { title: 'Waikato', value: 2 },
  { title: 'Wellington', value: 3 },
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState();

  const callApi = item => {
    setSelectedItem(item);
    //Call Rest API
    console.log(item);
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    // <Screen>
    //   <AppFormPicker items={items} selectedItem={selectedItem} onChangeSelect={callApi} />
    // </Screen>
  );
}
