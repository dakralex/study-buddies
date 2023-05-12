import React from 'react';
import AppButton, {AppButtonProps} from './AppButton';
import Icon from './Icon';
import useButtonStyles from '../../styles/Buttons';

const AppIconButton = (props: AppButtonProps) => {
  const {children} = props;
  const buttonStyles = useButtonStyles();

  return (
    <AppButton {...props}>
      {children}
      <Icon
        name="chevron-forward"
        size={buttonStyles.buttonIcon.width}
        color={buttonStyles.buttonIcon.color}
      />
    </AppButton>
  );
};

export default AppIconButton;
