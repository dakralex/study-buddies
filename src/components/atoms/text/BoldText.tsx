import React from 'react';
import {Text} from 'react-native';
import {TextProps} from './NormalText';
import useGlobalStyles from '../../../styles/Globals';

const BoldText = ({style, children}: TextProps) => {
  const globalStyles = useGlobalStyles();

  return <Text style={[globalStyles.boldText, style]}>{children}</Text>;
};

export default BoldText;
