import React from 'react';
import {ScrollView, StyleProp, ViewStyle} from 'react-native';

type HorizontalViewProps = {
  style: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const HorizontalView = ({style, children}: HorizontalViewProps) => {
  return (
    <ScrollView style={style} horizontal={true}>
      {children}
    </ScrollView>
  );
};

export default HorizontalView;
