import React from 'react';
import AppText, {TextProps} from '../AppText';

const NormalText = ({style, children}: TextProps) => {
  return (
    <AppText style={style} globalStyleKey="text">
      {children}
    </AppText>
  );
};

export default NormalText;
