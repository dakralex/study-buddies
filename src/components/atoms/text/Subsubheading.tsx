import React from 'react';
import AppText, {TextProps} from '../AppText';

type SubsubheadingProps = TextProps;

const Subsubheading = ({style, children}: SubsubheadingProps) => {
  return (
    <AppText style={style} globalStyleKey="subSubHeading">
      {children}
    </AppText>
  );
};

export default Subsubheading;
