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
  const navigation = useNavigation<AppNavigation>();
  const {id, title, mentis_ids} = props.course;

  return (
    <SearchResultItem
      title={title}
      description={`${mentis_ids.length} Mentis`}
      onPress={() => {
        navigation.navigate('CourseDetails', {
          courseId: id,
        });
      }}
    />
  );
};

export default CourseItem;
