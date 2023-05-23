import React from 'react';
import AppText, {TextProps} from '../AppText';

const BoldText = ({style, numberOfLines, children}: TextProps) => {
  return (
    <AppText
      style={style}
      numberOfLines={numberOfLines}
      globalStyleKey="boldText">
      {children}
    </AppText>
  );
};

export default BoldText;
