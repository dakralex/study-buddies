import React from 'react';
import AppText, {TextProps} from '../AppText';

type SubsubheadingProps = TextProps;

const SubSubHeading = ({
  style,
  numberOfLines,
  children,
}: SubsubheadingProps) => {
  return (
    <AppText
      style={style}
      numberOfLines={numberOfLines}
      globalStyleKey="subSubHeading">
      {children}
    </AppText>
  );
};

export default SubSubHeading;
