import React from 'react';
import useGlobalStyles from '../../../styles/Globals';
import {StyleProp, Text, TextStyle} from 'react-native';

export type TextProps = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

const NormalText = ({style, children}: TextProps) => {
  const globalStyles = useGlobalStyles();

  return <Text style={[globalStyles.text, style]}>{children}</Text>;
};

export default NormalText;
