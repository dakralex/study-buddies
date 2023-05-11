import React from 'react';
import {Text} from 'react-native';
import {TextProps} from './NormalText';
import useGlobalStyles from '../../../styles/Globals';

type SubheadingProps = TextProps;

const Subheading = ({style, children}: SubheadingProps) => {
  const globalStyles = useGlobalStyles();

  return <Text style={[globalStyles.subHeading, style]}>{children}</Text>;
};

export default Subheading;
