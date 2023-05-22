import React from 'react';
import {View} from 'react-native';
import Icon from '../atoms/Icon';
import NormalText from '../atoms/text/NormalText';
import AppIconButton from '../atoms/AppIconButton';
import useButtonStyles from '../../styles/Buttons';
import SubSubHeading from '../atoms/text/SubSubHeading';

import {AppButtonProps} from '../atoms/AppButton';
import {Notification} from '../../features/notifications/types';

type NotificationItemProps = AppButtonProps & {
  notification: Notification;
};

const NotificationItem = (props: NotificationItemProps) => {
  const {type, title, message} = props.notification;
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
        <View>
          <SubSubHeading>{title}</SubSubHeading>
        </View>
        <View>
          <NormalText>{message}</NormalText>
        </View>
      </NormalText>
    </AppIconButton>
  );
};

export default NotificationItem;
