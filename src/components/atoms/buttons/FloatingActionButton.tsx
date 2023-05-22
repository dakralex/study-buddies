import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import useButtonStyles from '../../../styles/Buttons';
import ToggleButton, {ToggleButtonProps} from '../../molecules/ToggleButton';

import {AppButtonProps} from '../AppButton';

type FloatingActionButtonProps = {
  Button?: typeof PrimaryButton | typeof SecondaryButton | typeof ToggleButton;
  buttonProps?: AppButtonProps & ToggleButtonProps;
  children?: React.ReactNode;
};

const FloatingActionButton = ({
  Button = PrimaryButton,
  buttonProps = {},
  children,
}: FloatingActionButtonProps) => {
  const buttonStyles = useButtonStyles();

  return (
    <Button
      wrapperStyle={buttonStyles.floatingActionButtonWrapper}
      {...buttonProps}>
      {children}
    </Button>
  );
};

export default FloatingActionButton;
