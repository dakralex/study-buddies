import React from 'react';
import {View} from 'react-native';
import Icon from '../atoms/Icon';
import AppIconButton from '../atoms/AppIconButton';
import {AppButtonProps} from '../atoms/AppButton';
import useButtonStyles from '../../styles/Buttons';
import NormalText from '../atoms/text/NormalText';
import SubSubHeading from '../atoms/text/SubSubHeading';
import {Notification} from '../../features/notifications/types';

type NotificationItemProps = AppButtonProps & Notification;

const NotificationItem = (props: NotificationItemProps) => {
  const {type, title, message} = props;
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
