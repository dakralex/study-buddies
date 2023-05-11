import React from 'react';
import useScreenStyles from '../styles/Screens';
import {SafeAreaView} from 'react-native-safe-area-context';

type ScreenProps = {
  children?: JSX.Element | JSX.Element[];
};

const AppScreen = ({children}: ScreenProps): JSX.Element => {
  const screenStyles = useScreenStyles();

  return (
    <SafeAreaView style={screenStyles.screenViewContainer}>
      {children}
    </SafeAreaView>
  );
};

export default AppScreen;
