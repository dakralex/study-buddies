import React from 'react';
import AppScreen from '../AppScreen';
import {CoursesOverviewScreenProps as Props} from '../../navigation/types';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import CourseList from '../../components/organisms/CourseList';
import {PROTOTYPE_COURSES} from '../../features/courses/courses';

const CoursesOverviewScreen = ({}: Props) => {
  return (
    <AppScreen scroll={false} padded={false}>
      <Container>
        <Heading>Deine Kurse</Heading>
        <CourseList courses={PROTOTYPE_COURSES} />
      </Container>
    </AppScreen>
  );
};

export default CoursesOverviewScreen;
