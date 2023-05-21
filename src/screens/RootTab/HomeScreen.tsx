import React from 'react';
import {HomeScreenProps as Props} from '../../navigation/types';

import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import NormalText from '../../components/atoms/text/NormalText';
import NotificationList from '../../components/organisms/NotificationList';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import {PROTOTYPE_NOTIFICATIONS} from '../../features/notifications/notifications';

const HomeScreen = ({navigation}: Props) => {
  return (
    <AppScreen padded={false}>
      <Container>
        <Heading>Servus, Joel!</Heading>
        <NormalText>
          Das sind deine neuesten Ereignisse auf StudyBuddies!
        </NormalText>
      </Container>
      <NotificationList notifications={PROTOTYPE_NOTIFICATIONS.slice(0, 3)} />
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
