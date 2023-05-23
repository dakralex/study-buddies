import React from 'react';
import AppScreen from '../AppScreen';
import spacingsStyles from '../../styles/Spacings';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import NormalText from '../../components/atoms/text/NormalText';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import NotificationList from '../../components/organisms/NotificationList';

import {useAppSelector} from '../../store/configureStore';
import {selectRecentNotifications} from '../../features/notifications/notificationsSlice';

import {HomeScreenProps as Props} from '../../navigation/types';

const HomeScreen = ({navigation}: Props) => {
  const recentNotifications = useAppSelector(selectRecentNotifications);

  return (
    <AppScreen scroll={true} padded={false}>
      <Container style={spacingsStyles.sectionSpacingBottomSmall}>
        <Heading>Servus, Joel!</Heading>
        <NormalText>
          Das sind deine neuesten Ereignisse auf StudyBuddies!
        </NormalText>
      </Container>
      <NotificationList
        style={spacingsStyles.sectionSpacingBottomSmall}
        notifications={recentNotifications}
      />
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
