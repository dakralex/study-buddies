import React from 'react';
import {FlatList} from 'react-native';
import Divider from '../atoms/Divider';
import CourseItem from '../molecules/CourseItem';
import {Courses} from '../../features/courses/types';

type CoursesListProps = {
  courses: Courses;
};

const CoursesList = ({courses}: CoursesListProps) => {
  return (
    <FlatList
      scrollEnabled={false}
      data={Object.values(courses)}
      renderItem={({item: course}) => (
        <React.Fragment>
          <CourseItem course={course} />
          <Divider height={2} />
        </React.Fragment>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default CoursesList;
