import React from 'react';
import AppText, {TextProps} from '../AppText';

type HeadingProps = TextProps;

const Heading = ({style, numberOfLines, children}: HeadingProps) => {
  return (
    <AppText
      style={style}
      numberOfLines={numberOfLines}
      globalStyleKey="heading">
      {children}
    </AppText>
  );
};

export default Heading;
