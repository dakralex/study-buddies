import React from 'react';
import AppIconButton from '../atoms/AppIconButton';
import {AppButtonProps} from '../atoms/AppButton';
import Icon from '../atoms/Icon';
import useButtonStyles from '../../styles/Buttons';
import NormalText from '../atoms/text/NormalText';

type NotificationType = 'message' | 'post';

type NotificationItemProps = AppButtonProps & {
  type: NotificationType;
};

const NotificationItem = (props: NotificationItemProps) => {
  const {type, children} = props;
  const buttonStyles = useButtonStyles();

  return (
    <AppIconButton
      {...props}
      wrapperStyle={buttonStyles.notificationItemWrapper}
      containerStyle={buttonStyles.notificationItemContainer}>
      <Icon
        name={type === 'message' ? 'chatbox' : 'file-tray-stacked'}
        size={buttonStyles.buttonIcon.width}
        color={buttonStyles.buttonIcon.color}
      />
      <NormalText style={buttonStyles.notificationItemContent}>
        {children}
      </NormalText>
    </AppIconButton>
  );
};

export default NotificationItem;
