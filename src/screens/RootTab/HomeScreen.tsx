import React from 'react';
import {HomeScreenProps as Props} from '../../navigation/types';

import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import NormalText from '../../components/atoms/text/NormalText';
import {Notifications} from '../../features/notifications/types';
import NotificationList from '../../components/organisms/NotificationList';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';

const PROTOTYPE_NOTIFICATIONS: Notifications = [
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
];

const HomeScreen = ({navigation}: Props) => {
  return (
    <AppScreen scroll={false} padded={false}>
      <Container>
        <Heading>Servus, Alaine!</Heading>
        <NormalText>
          Das sind deine neuesten Ereignisse auf StudyBuddies!
        </NormalText>
      </Container>
      <NotificationList notifications={PROTOTYPE_NOTIFICATIONS} />
      <Container>
        <PrimaryButton
          onPress={() => {
            navigation.navigate('Notifications');
          }}>
          Alle Benachrichtigungen
        </PrimaryButton>
      </Container>
    </AppScreen>
  );
};

export default HomeScreen;
