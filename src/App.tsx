import React from 'react';
import store from './store/configureStore';
import {Provider as StoreProvider} from 'react-redux';
import RootNavigation from './navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
