import React from 'react';
import {View} from 'react-native';
import {HomeScreenProps as Props} from '../../navigation/types';

import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import Subheading from '../../components/atoms/text/Subheading';
import Subsubheading from '../../components/atoms/text/Subsubheading';
import BoldText from '../../components/atoms/text/BoldText';
import NormalText from '../../components/atoms/text/NormalText';
import SmallText from '../../components/atoms/text/SmallText';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';
import NotificationItem from '../../components/molecules/NotificationItem';

const HomeScreen = ({navigation}: Props) => {
  return (
    <AppScreen scroll={true} padded={false}>
      <Container>
        <Heading>Heading</Heading>
        <Subheading>Subheading</Subheading>
        <Subsubheading>Subsubheading</Subsubheading>
        <BoldText>Lorem ipsum dolor sit amet.</BoldText>
        <NormalText>Lorem ipsum dolor sit amet.</NormalText>
        <SmallText>Lorem ipsum dolor sit amet.</SmallText>
        <View style={{paddingTop: 12}}>
          <PrimaryButton
            onPress={() => {
              navigation.navigate('Courses');
            }}>
            Primary Button (Courses)
          </PrimaryButton>
        </View>
        <View style={{paddingVertical: 12}}>
          <SecondaryButton
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            Secondary Button (Profile)
          </SecondaryButton>
        </View>
      </Container>
      <NotificationItem
        type="message"
        onPress={() => {
          navigation.navigate('Messages');
        }}>
        Message Notification Item
      </NotificationItem>
      <NotificationItem
        type="post"
        onPress={() => {
          navigation.navigate('Forums');
        }}>
        Post Notification Item
      </NotificationItem>
    </AppScreen>
  );
};

export default HomeScreen;
