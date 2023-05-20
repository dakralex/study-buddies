import React from 'react';
import {NotificationsScreenProps as Props} from '../../navigation/types';
import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import NotificationList from '../../components/organisms/NotificationList';
import {PROTOTYPE_NOTIFICATIONS} from '../../features/notifications/notifications';

const NotificationsScreen = ({}: Props) => {
  return (
    <AppScreen scroll={false} padded={false}>
      <Container>
        <Heading>Deine Benachrichtigungen</Heading>
      </Container>
      <NotificationList notifications={PROTOTYPE_NOTIFICATIONS} />
    </AppScreen>
  );
};

export default NotificationsScreen;
