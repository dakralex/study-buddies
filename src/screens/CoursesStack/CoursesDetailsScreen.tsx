import React, {useState} from 'react';
import {View} from 'react-native';
import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import NormalText from '../../components/atoms/text/NormalText';
import SubHeading from '../../components/atoms/text/SubHeading';
import HorizontalView from '../../components/atoms/HorizontalView';
import ToggleButton from '../../components/molecules/ToggleButton';
import SubSubHeading from '../../components/atoms/text/SubSubHeading';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';

import {PROTOTYPE_COURSES} from '../../features/courses/courses';
import {CoursesDetailsScreenProps as Props} from '../../navigation/types';

const CoursesDetailsScreen = ({navigation, route}: Props) => {
  const {courseId} = route.params;
  const course = PROTOTYPE_COURSES[courseId];
  const [toggleButtonState, setToggleButtonState] = useState(true);

  return (
    <AppScreen scroll={false} padded={false}>
      {!course ? (
        <NormalText>Der Kurs konnte nicht gefunden werden.</NormalText>
      ) : (
        <Container>
          <SubSubHeading>{course.study}</SubSubHeading>
          <Heading>{course.module}</Heading>
          <SubHeading>{course.title}</SubHeading>
          <NormalText>{course.description}</NormalText>
          <View style={{paddingTop: 10}}>
            <Heading>Mentees</Heading>
          </View>
          <HorizontalView>
            <SubHeading>BLAHAAAAAAA</SubHeading>
            <SubHeading>BLAHBBBBBBB</SubHeading>
            <SubHeading>BLAHCCCCCCC</SubHeading>
            <SubHeading>BLAHDDDDDDD</SubHeading>
            <SubHeading>BLAHEEEEEEE</SubHeading>
          </HorizontalView>

          <HorizontalView>
            <PrimaryButton
              onPress={() => {
                // Zum jeweiligen Forum springen
                navigation.navigate('ForumDetails', {
                  forumId: course.forum_id,
                });
              }}>
              Forum
            </PrimaryButton>
            <ToggleButton
              state={toggleButtonState}
              setState={setToggleButtonState}
              stateOnText="Als Mentee registrieren"
              stateOffText="Als Mentee entfernen"
            />
          </HorizontalView>
        </Container>
      )}
    </AppScreen>
  );
};

export default CoursesDetailsScreen;
