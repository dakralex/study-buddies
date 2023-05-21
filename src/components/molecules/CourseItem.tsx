import React from 'react';
import SearchResultItem from './SearchResultItem';
import {useNavigation} from '@react-navigation/native';

import {AppButtonProps} from '../atoms/AppButton';
import {Course} from '../../features/courses/types';
import {AppNavigation} from '../../navigation/types';

type CourseItemProps = AppButtonProps & {
  course: Course;
};

const CourseItem = (props: CourseItemProps) => {
  const {id, title, mentee_ids} = props.course;
  const navigation = useNavigation<AppNavigation>();

  return (
    <SearchResultItem
      title={title}
      description={`${mentee_ids.length} Mentees`}
      onPress={() => {
        navigation.navigate('CourseDetails', {
          courseId: id,
        });
      }}
    />
  );
};

export default CourseItem;
