import React, {useState} from 'react';
import AppScreen from '../AppScreen';
import {CoursesDetailsScreenProps as Props} from '../../navigation/types';
import NormalText from '../../components/atoms/text/NormalText';
import {PROTOTYPE_COURSES} from '../../features/courses/courses';
import Heading from '../../components/atoms/text/Heading';
import SubHeading from '../../components/atoms/text/SubHeading';
import SubSubHeading from '../../components/atoms/text/SubSubHeading';
import Container from '../../components/atoms/Container';
import HorizontalView from '../../components/atoms/HorizontalView';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import navigation from '../../styles/Navigation';
import ToggleButton from '../../components/molecules/ToggleButton';
import {View} from 'react-native';

const CoursesDetailsScreen = ({route}: Props) => {
  const {
    params: {courseId},
  } = route;
  const course = PROTOTYPE_COURSES[courseId];

  const [toggleButtonState, setToggleButtonState] = useState(true);

  //console.log('AAAAA', courseId);

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
            <Heading>Mentis:</Heading>
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
                //Zum jeweiligen Forum springen
                navigation.navigate(course.forum_id);
              }}>
              Forum
            </PrimaryButton>
            <ToggleButton
              state={toggleButtonState}
              setState={setToggleButtonState}
              stateOnText="Als Menti registrieren"
              stateOffText="Als Menti entfernen"
            />
          </HorizontalView>
        </Container>
      )}
    </AppScreen>
  );
};

export default CoursesDetailsScreen;
