import React from 'react';
import AppText, {TextProps} from '../AppText';

type SmallTextProps = TextProps;

const SmallText = ({style, children}: SmallTextProps) => {
  return (
    <AppText style={style} globalStyleKey="smallText">
      {children}
    </AppText>
  );
};

export default SmallText;
