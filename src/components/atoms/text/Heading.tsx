import React from 'react';
import {Text} from 'react-native';
import {TextProps} from './NormalText';
import useGlobalStyles from '../../../styles/Globals';

type HeadingProps = TextProps;

const Heading = ({style, children}: HeadingProps) => {
  const globalStyles = useGlobalStyles();

  return <Text style={[globalStyles.heading, style]}>{children}</Text>;
};

export default Heading;
