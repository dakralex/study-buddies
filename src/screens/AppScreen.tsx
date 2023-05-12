import React from 'react';
import useScreenStyles from '../styles/Screens';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleProp, ViewStyle} from 'react-native';

type ScreenProps = {
  style?: StyleProp<ViewStyle>;
  scroll?: boolean;
  padded?: boolean;
  children?: React.ReactNode;
};

const AppScreen = ({
  style,
  scroll = false,
  padded = true,
  children,
}: ScreenProps) => {
  const screenStyles = useScreenStyles();

  const ScreenView = scroll ? ScrollView : SafeAreaView;
  const viewStyles = padded
    ? screenStyles.screenViewPaddedContainer
    : screenStyles.screenViewContainer;

  return <ScreenView style={[viewStyles, style]}>{children}</ScreenView>;
};

export default AppScreen;
