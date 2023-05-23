import React from 'react';
import AppText, {TextProps} from '../AppText';

type SubheadingProps = TextProps;

const SubHeading = ({style, numberOfLines, children}: SubheadingProps) => {
  return (
    <AppText
      style={style}
      numberOfLines={numberOfLines}
      globalStyleKey="subHeading">
      {children}
    </AppText>
  );
};

export default SubHeading;
