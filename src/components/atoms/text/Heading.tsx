import React from 'react';
import AppText, {TextProps} from '../AppText';

type HeadingProps = TextProps;

const Heading = ({style, children}: HeadingProps) => {
  return (
    <AppText style={style} globalStyleKey="heading">
      {children}
    </AppText>
  );
};

export default Heading;
