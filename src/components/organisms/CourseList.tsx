import React from 'react';
import {FlatList} from 'react-native';
import CourseItem from '../molecules/CourseItem';
import {Courses} from '../../features/courses/types';

type CourseListProps = {
  courses: Courses;
};

const CourseList = ({courses}: CourseListProps) => {
  return (
    <FlatList
      scrollEnabled={false}
      data={Object.values(courses)}
      renderItem={({item: course}) => <CourseItem course={course} />}
      keyExtractor={item => item.id}
    />
  );
};

export default CourseList;
