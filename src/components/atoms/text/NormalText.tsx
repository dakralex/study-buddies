import React from 'react';
import AppText, {TextProps} from '../AppText';

const NormalText = ({style, numberOfLines, children}: TextProps) => {
  return (
    <AppText style={style} numberOfLines={numberOfLines} globalStyleKey="text">
      {children}
    </AppText>
  );
};

export default NormalText;
