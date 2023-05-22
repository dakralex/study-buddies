import React from 'react';
import {SCREEN_PADDING_HORIZONTAL} from '../../styles/Screens';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type ContainerProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const Container = ({style, children}: ContainerProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SCREEN_PADDING_HORIZONTAL,
  },
});

export default Container;
