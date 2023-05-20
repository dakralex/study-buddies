import React from 'react';
import AppScreen from '../AppScreen';
import {CoursesOverviewScreenProps as Props} from '../../navigation/types';

import Container from '../../components/atoms/Container';

const CoursesOverviewScreen = ({}: Props) => {
  return (
    <AppScreen scroll={true} padded={false}>
      <Container />
    </AppScreen>
  );
};

export default CoursesOverviewScreen;
