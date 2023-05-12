import React from 'react';
import NormalText from '../text/NormalText';
import {AppButtonProps} from '../AppButton';
import AppIconButton from '../AppIconButton';
import useButtonStyles from '../../../styles/Buttons';

const SecondaryButton = (props: AppButtonProps) => {
  const {children} = props;
  const buttonStyles = useButtonStyles();

  return (
    <AppIconButton
      {...props}
      containerStyle={buttonStyles.secondaryButtonContainer}>
      <NormalText style={buttonStyles.secondaryButtonContent}>
        {children}
      </NormalText>
    </AppIconButton>
  );
};

export default SecondaryButton;
