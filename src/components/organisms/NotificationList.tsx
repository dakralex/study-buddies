import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import NotificationItem from '../molecules/NotificationItem';
import {Notifications} from '../../features/notifications/types';

type NotificationListProps = {
  notifications: Notifications;
};
const NotificationList = ({notifications}: NotificationListProps) => {
  return (
    <FlatList
      style={styles.notificationListContainer}
      data={notifications}
      renderItem={({item: notification}) => (
        <NotificationItem
          type={notification.type}
          title={notification.title}
          message={notification.message}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  notificationListContainer: {
    paddingVertical: 16,
  },
});

export default NotificationList;
