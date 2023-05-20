import React from 'react';
import AppScreen from '../AppScreen';
import {CoursesCreateScreenProps as Props} from '../../navigation/types';
import Container from '../../components/atoms/Container';
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton";
import NormalText from '../../components/atoms/text/NormalText';

const CoursesDetailsScreen = ({}: Props) => {
  return (
    <AppScreen>
      <Container>
        <NormalText>Das ist die CoursesCreateScreen Seite.</NormalText>
      </Container>
    </AppScreen>
  );
};

export default CoursesDetailsScreen;
