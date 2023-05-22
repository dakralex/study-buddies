import React from 'react';
import {FlatList} from 'react-native';
import NotificationItem from '../molecules/NotificationItem';

import {Notification, Notifications} from '../../features/notifications/types';

type NotificationListProps = {
  notifications: Notifications | Array<Notification>;
};

const NotificationList = ({notifications}: NotificationListProps) => {
  return (
    <FlatList
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
