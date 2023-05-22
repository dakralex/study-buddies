import React from 'react';
import AppScreen from '../AppScreen';
import NotificationList from '../../components/organisms/NotificationList';

import {NotificationsScreenProps as Props} from '../../navigation/types';
import {PROTOTYPE_NOTIFICATIONS} from '../../features/notifications/notifications';

const NotificationsScreen = ({}: Props) => {
  return (
    <AppScreen scroll={true} padded={false}>
      <NotificationList notifications={PROTOTYPE_NOTIFICATIONS} />
    </AppScreen>
  );
};

export default NotificationsScreen;
