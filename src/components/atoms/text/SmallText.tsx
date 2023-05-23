import React from 'react';
import AppText, {TextProps} from '../AppText';

type SmallTextProps = TextProps;

const SmallText = ({style, numberOfLines, children}: SmallTextProps) => {
  return (
    <AppText
      style={style}
      numberOfLines={numberOfLines}
      globalStyleKey="smallText">
      {children}
    </AppText>
  );
};

export default SmallText;
