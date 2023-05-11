import React from 'react';
import useGlobalStyles from '../../styles/Globals';
import {StyleProp, Text, TextStyle} from 'react-native';

export type TextProps = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

type AppTextProps = TextProps & {
  globalStyleKey: keyof ReturnType<typeof useGlobalStyles>;
};

const AppText = ({style, children, globalStyleKey}: AppTextProps) => {
  const globalStyles = useGlobalStyles();

  return <Text style={[globalStyles[globalStyleKey], style]}>{children}</Text>;
};

export default AppText;
