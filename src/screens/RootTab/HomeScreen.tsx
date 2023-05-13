import React from 'react';
import {HomeScreenProps as Props} from '../../navigation/types';

import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';

const HomeScreen = ({navigation}: Props) => {
  return (
    <AppScreen scroll={true} padded={false}>
      <Container>
        <Heading>Servus, _______!</Heading>
      </Container>
    </AppScreen>
  );
};

export default HomeScreen;
