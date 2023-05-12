import React from 'react';
import AppText, {TextProps} from '../AppText';

type SubheadingProps = TextProps;

const SubHeading = ({style, children}: SubheadingProps) => {
  return (
    <AppText style={style} globalStyleKey="subHeading">
      {children}
    </AppText>
  );
};

export default SubHeading;
