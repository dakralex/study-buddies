import React from 'react';
import useScreenStyles from '../styles/Screens';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleProp, View, ViewStyle} from 'react-native';

type ScreenProps = {
  style?: StyleProp<ViewStyle>;
  scroll?: boolean;
  padded?: boolean;
  children?: React.ReactNode;
  BottomComponent?: React.ReactNode;
};

const AppScreen = ({
  style,
  scroll = false,
  padded = true,
  children,
  BottomComponent,
}: ScreenProps) => {
  const screenStyles = useScreenStyles();
  const ScreenView = scroll ? ScrollView : SafeAreaView;
  const viewStyles = padded
    ? screenStyles.screenViewPaddedContainer
    : screenStyles.screenViewContainer;

  return (
    <View style={screenStyles.screenWrapper}>
      <View style={viewStyles}>
        <ScreenView style={style}>{children}</ScreenView>
        {BottomComponent}
      </View>
    </View>
  );
};

export default AppScreen;
