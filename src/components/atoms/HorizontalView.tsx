import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SCREEN_PADDING_VERTICAL} from '../../styles/Screens';

type HorizontalViewProps = {
  children?: React.ReactNode;
};

const HorizontalView = ({children}: HorizontalViewProps) => {
  return (
    <ScrollView style={styles.container} horizontal={true}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: SCREEN_PADDING_VERTICAL,
  },
});

export default HorizontalView;
