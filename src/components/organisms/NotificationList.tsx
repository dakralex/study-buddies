import React from 'react';
import {FlatList, StyleProp, ViewStyle} from 'react-native';
import NotificationItem from '../molecules/NotificationItem';

import {Notification, Notifications} from '../../features/notifications/types';

type NotificationListProps = {
  style?: StyleProp<ViewStyle>;
  notifications: Notifications | Array<Notification>;
};

const NotificationList = ({style, notifications}: NotificationListProps) => {
  return (
    <FlatList
      style={style}
      scrollEnabled={false}
      data={Object.values(notifications)}
      renderItem={({item: notification}) => (
        <NotificationItem notification={notification} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default NotificationList;
