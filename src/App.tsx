import React from 'react';
import {useNavigationTheme} from './styles/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStackNavigation from './navigation/RootStackNavigation';

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer theme={useNavigationTheme()}>
      <RootStackNavigation />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
