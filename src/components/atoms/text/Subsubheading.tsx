import React from 'react';
import {Text} from 'react-native';
import {TextProps} from './NormalText';
import useGlobalStyles from '../../../styles/Globals';

type SubsubheadingProps = TextProps;

const Subsubheading = ({style, children}: SubsubheadingProps) => {
  const globalStyles = useGlobalStyles();

  return <Text style={[globalStyles.subSubHeading, style]}>{children}</Text>;
};

export default Subsubheading;
