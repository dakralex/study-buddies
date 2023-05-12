import React from 'react';
import store from './store/configureStore';
import {Provider as StoreProvider} from 'react-redux';
import RootNavigation from './navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <StoreProvider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  </StoreProvider>
);

export default App;
