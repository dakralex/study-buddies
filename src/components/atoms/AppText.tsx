import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import useTextStyles, {TextStyleTypes} from '../../styles/Text';

export type TextProps = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

type AppTextProps = TextProps & {
  globalStyleKey: TextStyleTypes;
};

const AppText = ({style, children, globalStyleKey}: AppTextProps) => {
  const globalStyles = useTextStyles();

  return <Text style={[globalStyles[globalStyleKey], style]}>{children}</Text>;
};

export default AppText;
