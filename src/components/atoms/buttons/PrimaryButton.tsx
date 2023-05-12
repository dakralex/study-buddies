import React from 'react';
import NormalText from '../text/NormalText';
import {AppButtonProps} from '../AppButton';
import AppIconButton from '../AppIconButton';
import useButtonStyles from '../../../styles/Buttons';

const PrimaryButton = (props: AppButtonProps) => {
  const {children} = props;
  const buttonStyles = useButtonStyles();

  return (
    <AppIconButton
      {...props}
      containerStyle={buttonStyles.primaryButtonContainer}>
      <NormalText style={buttonStyles.primaryButtonContent}>
        {children}
      </NormalText>
    </AppIconButton>
  );
};

export default PrimaryButton;
