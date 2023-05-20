import React from 'react';
import {AppButtonProps} from '../atoms/AppButton';
import {Course} from '../../features/courses/types';
import SearchResultItem from './SearchResultItem';
import {useNavigation} from '@react-navigation/native';

type CourseItemProps = AppButtonProps & {
  course: Course;
};

const CourseItem = (props: CourseItemProps) => {
  const navigation = useNavigation();
  const {
    course: {id, title, mentis_ids},
  } = props;

  return (
    <SearchResultItem
      title={title}
      description={`${mentis_ids.length} Mentis`}
      onPress={() => {
        navigation.navigate('CourseDetails', {
          id: id,
        });
      }}
    />
  );
};

export default CourseItem;
