import React from 'react';
import AppText, {TextProps} from '../AppText';

type SubsubheadingProps = TextProps;

const SubSubHeading = ({style, children}: SubsubheadingProps) => {
  return (
    <AppText style={style} globalStyleKey="subSubHeading">
      {children}
    </AppText>
  );
};

export default SubSubHeading;
