import React from 'react';
import {View} from 'react-native';
import Icon from '../atoms/Icon';
import NormalText from '../atoms/text/NormalText';
import AppIconButton from '../atoms/AppIconButton';
import useButtonStyles from '../../styles/Buttons';
import {useNavigation} from '@react-navigation/native';
import SubSubHeading from '../atoms/text/SubSubHeading';

import {AppButtonProps} from '../atoms/AppButton';
import {AppNavigation} from '../../navigation/types';
import {Notification} from '../../features/notifications/types';

type NotificationItemProps = AppButtonProps & {
  notification: Notification;
};

const NotificationItem = (props: NotificationItemProps) => {
  const {type, title, message, link_id} = props.notification;
  const buttonStyles = useButtonStyles();

  const navigation = useNavigation<AppNavigation>();
  const [forumId, postId] = link_id.split(':');

  return (
    <AppIconButton
      {...props}
      onPress={() => {
        navigation.navigate('Forums', {
          screen: 'PostDetails',
          initial: false,
          params: {
            postId: postId,
            forumId: forumId,
          },
        });
      }}
      wrapperStyle={buttonStyles.notificationItemWrapper}
      containerStyle={buttonStyles.notificationItemContainer}>
      <Icon
        name={type === 'message' ? 'chatbox' : 'file-tray-stacked'}
        size={buttonStyles.buttonIcon.width}
        color={buttonStyles.buttonIcon.color}
      />
      <View style={buttonStyles.notificationItemContent}>
        <SubSubHeading style={{flex: 1}} numberOfLines={1}>
          {title}
        </SubSubHeading>
        <NormalText numberOfLines={1}>{message}</NormalText>
      </View>
    </AppIconButton>
  );
};

export default NotificationItem;
