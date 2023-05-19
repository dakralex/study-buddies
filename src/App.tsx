import React from 'react';
import store from './store/configureStore';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStackNavigation from './navigation/RootStackNavigation';

const App = () => (
  <StoreProvider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  </StoreProvider>
);

export default App;
