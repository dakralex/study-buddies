import React from 'react';
import AppScreen from '../AppScreen';
import NotificationList from '../../components/organisms/NotificationList';

import {useAppSelector} from '../../store/configureStore';
import {selectNotifications} from '../../features/notifications/notificationsSlice';

import {NotificationsScreenProps as Props} from '../../navigation/types';

const NotificationsScreen = ({}: Props) => {
  const notifications = useAppSelector(selectNotifications);

  return (
    <AppScreen scroll={true} padded={false}>
      <NotificationList notifications={notifications} />
    </AppScreen>
  );
};

export default NotificationsScreen;
