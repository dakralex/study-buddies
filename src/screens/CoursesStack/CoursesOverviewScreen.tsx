import React from 'react';
import AppScreen from '../AppScreen';
import CoursesList from '../../components/organisms/CoursesList';

import {PROTOTYPE_COURSES} from '../../features/courses/courses';
import {CoursesOverviewScreenProps as Props} from '../../navigation/types';

const CoursesOverviewScreen = ({}: Props) => {
  return (
    <AppScreen scroll={true} padded={false}>
      <CoursesList courses={PROTOTYPE_COURSES} />
    </AppScreen>
  );
};

export default CoursesOverviewScreen;
