import React from 'react';
import AppScreen from '../AppScreen';
import CourseList from '../../components/organisms/CourseList';

import {PROTOTYPE_COURSES} from '../../features/courses/courses';
import {CoursesOverviewScreenProps as Props} from '../../navigation/types';

const CoursesOverviewScreen = ({}: Props) => {
  return (
    <AppScreen scroll={true} padded={false}>
      <CourseList courses={PROTOTYPE_COURSES} />
    </AppScreen>
  );
};

export default CoursesOverviewScreen;
