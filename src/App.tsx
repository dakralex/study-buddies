import React from 'react';
import store from './store/configureStore';
import {Provider as StoreProvider} from 'react-redux';
import {useNavigationTheme} from './styles/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStackNavigation from './navigation/RootStackNavigation';

const App = () => (
  <SafeAreaProvider>
    <StoreProvider store={store}>
      <NavigationContainer theme={useNavigationTheme()}>
        <RootStackNavigation />
      </NavigationContainer>
    </StoreProvider>
  </SafeAreaProvider>
);

export default App;
