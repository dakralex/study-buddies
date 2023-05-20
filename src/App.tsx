import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStackNavigation from './navigation/RootStackNavigation';

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
