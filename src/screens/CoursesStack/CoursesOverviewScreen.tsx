import React from 'react';
import AppScreen from '../AppScreen';
import CoursesList from '../../components/organisms/CoursesList';

import {useAppSelector} from '../../store/configureStore';
import {selectCourses} from '../../features/courses/coursesSlice';

import {CoursesOverviewScreenProps as Props} from '../../navigation/types';

const CoursesOverviewScreen = ({}: Props) => {
  const courses = useAppSelector(selectCourses);

  return (
    <AppScreen scroll={true} padded={false}>
      <CoursesList courses={courses} />
    </AppScreen>
  );
};

export default CoursesOverviewScreen;
