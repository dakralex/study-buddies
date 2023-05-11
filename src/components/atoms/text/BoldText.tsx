import React from 'react';
import AppText, {TextProps} from '../AppText';

const BoldText = ({style, children}: TextProps) => {
  return (
    <AppText style={style} globalStyleKey="boldText">
      {children}
    </AppText>
  );
};

export default BoldText;
