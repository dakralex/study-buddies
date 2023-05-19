import React from 'react';
import {Notifications} from '../../features/notifications/types';
import {NotificationsScreenProps as Props} from '../../navigation/types';
import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import NotificationList from '../../components/organisms/NotificationList';

export const PROTOTYPE_NOTIFICATIONS: Notifications = [
  {
    type: 'message',
    title: 'Neue Nachricht von Flora',
    message: 'Hey du, ich suche gerade nach einer Lern...',
  },
  {
    type: 'post',
    title: 'Neue Antwort auf deinen Post',
    message: 'Hää, warum machst du dabei nicht einf...',
  },
  {
    type: 'post',
    title: 'Neuer Post in Politische Philosophie',
    message: 'Kennt sich jmd mit dem Zusammenhang...',
  },
  {
    type: 'message',
    title: 'Neue Nachricht von Samuel',
    message: 'Was hast du bei dem Beispiel 8...',
  },
];

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
