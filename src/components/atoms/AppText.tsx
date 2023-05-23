import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import useTextStyles, {TextStyleTypes} from '../../styles/Text';

export type TextProps = {
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  children: React.ReactNode;
};

type AppTextProps = TextProps & {
  globalStyleKey: TextStyleTypes;
};

const AppText = ({
  style,
  numberOfLines,
  children,
  globalStyleKey,
}: AppTextProps) => {
  const globalStyles = useTextStyles();

  return (
    <Text
      style={[globalStyles[globalStyleKey], style]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default AppText;
