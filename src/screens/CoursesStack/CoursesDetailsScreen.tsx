import React from 'react';
import AppScreen from '../AppScreen';
import {CoursesDetailsScreenProps as Props} from '../../navigation/types';
import NormalText from '../../components/atoms/text/NormalText';
import {PROTOTYPE_COURSES} from '../../features/courses/courses';
import Heading from '../../components/atoms/text/Heading';
import SubHeading from '../../components/atoms/text/SubHeading';
import SubSubHeading from '../../components/atoms/text/SubSubHeading';
import Container from '../../components/atoms/Container';
import HorizontalView from '../../components/atoms/HorizontalView';

const CoursesDetailsScreen = ({route}: Props) => {
  const {
    params: {courseId},
  } = route;
  const course = PROTOTYPE_COURSES[courseId];

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

          <HorizontalView>
            <SubSubHeading>{course.study}</SubSubHeading>
            <Heading>{course.module}</Heading>
            <SubHeading>{course.title}</SubHeading>
            <NormalText>{course.description}</NormalText>
          </HorizontalView>
        </Container>
      )}
    </AppScreen>
  );
};

export default CoursesDetailsScreen;
