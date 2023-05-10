import React from 'react';
import {SafeAreaView} from 'react-native';
import store from './store/configureStore';
import {Provider as StoreProvider} from 'react-redux';

function App(): JSX.Element {
  return (
    <StoreProvider store={store}>
      <SafeAreaView />
    </StoreProvider>
  );
}

export default App;
