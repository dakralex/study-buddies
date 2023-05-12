import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SCREEN_PADDING_HORIZONTAL} from '../../styles/Screens';

type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({children}: ContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SCREEN_PADDING_HORIZONTAL,
  },
});

export default Container;
