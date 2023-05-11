import React from 'react';
import {Text} from 'react-native';
import {TextProps} from './NormalText';
import useGlobalStyles from '../../../styles/Globals';

type SmallTextProps = TextProps;

const SmallText = ({style, children}: SmallTextProps) => {
  const globalStyles = useGlobalStyles();

  return <Text style={[globalStyles.smallText, style]}>{children}</Text>;
};

export default SmallText;
