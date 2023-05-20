import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CourseItem from '../molecules/CourseItem';
import {Courses} from '../../features/courses/types';

type CourseListProps = {
  courses: Courses;
};

const CourseList = ({courses}: CourseListProps) => {
  return (
    <FlatList
      style={styles.courseListContainer}
      data={Object.values(courses)}
      renderItem={({item: course}) => <CourseItem course={course} />}
    />
  );
};

const styles = StyleSheet.create({
  courseListContainer: {
    paddingVertical: 16,
  },
});

export default CourseList;
