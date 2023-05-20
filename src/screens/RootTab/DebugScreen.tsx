import React, {useState} from 'react';
import {View} from 'react-native';
import AppScreen from '../AppScreen';
import {DebugScreenProps as Props} from '../../navigation/types';

import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import SubHeading from '../../components/atoms/text/SubHeading';
import SubSubHeading from '../../components/atoms/text/SubSubHeading';
import BoldText from '../../components/atoms/text/BoldText';
import NormalText from '../../components/atoms/text/NormalText';
import SmallText from '../../components/atoms/text/SmallText';
import ToggleButton from '../../components/molecules/ToggleButton';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import SecondaryButton from '../../components/atoms/buttons/SecondaryButton';
import NotificationItem from '../../components/molecules/NotificationItem';
import SearchResultItem from '../../components/molecules/SearchResultItem';

const DebugScreen = ({navigation}: Props) => {
  const [toggleButtonState, setToggleButtonState] = useState(false);

  return (
    <AppScreen scroll={true} padded={false}>
      <Container>
        <Heading>Heading</Heading>
        <SubHeading>Subheading</SubHeading>
        <SubSubHeading>Subsubheading</SubSubHeading>
        <BoldText>Lorem ipsum dolor sit amet.</BoldText>
        <NormalText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ornare gravida quam, vel faucibus augue egestas quis. Vivamus eu
          finibus libero. Vivamus ut ligula neque. In luctus porttitor nisi non
          dignissim. Sed et mauris elit. Proin porttitor pulvinar nisi. Nulla
          faucibus ex massa, eu volutpat purus accumsan vel. Morbi aliquet id
          eros vel faucibus.
        </NormalText>
        <SmallText>Lorem ipsum dolor sit amet.</SmallText>
        <View style={{paddingTop: 12}}>
          <ToggleButton
            state={toggleButtonState}
            setState={setToggleButtonState}
            stateOnText="Toggle Button (on)"
            stateOffText="Toggle Button (off)"
          />
        </View>
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
      <SearchResultItem
        title="SearchResultItem"
        description="Additional information goes here"
        onPress={() => {
          navigation.navigate('Forums');
        }}
      />
      <Container>
        <NormalText>Test</NormalText>
      </Container>
    </AppScreen>
  );
};

export default DebugScreen;
