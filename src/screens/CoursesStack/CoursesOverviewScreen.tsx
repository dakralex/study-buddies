import React from 'react';
import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import CourseList from '../../components/organisms/CourseList';

import {PROTOTYPE_COURSES} from '../../features/courses/courses';
import {CoursesOverviewScreenProps as Props} from '../../navigation/types';

const CoursesOverviewScreen = ({}: Props) => {
  return (
    <AppScreen padded={false}>
      <Container>
        <Heading>Deine Kurse</Heading>
      </Container>
      <CourseList courses={PROTOTYPE_COURSES} />
    </AppScreen>
  );
};

export default CoursesOverviewScreen;
