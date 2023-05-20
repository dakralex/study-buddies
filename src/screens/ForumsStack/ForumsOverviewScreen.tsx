import React from 'react';
import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import ForumOverviewList from '../../components/organisms/ForumOverviewList';

import {PROTOTYPE_FORUMS} from '../../features/forums/forums';
import {ForumsOverviewScreenProps as Props} from '../../navigation/types';

const ForumsOverviewScreen = ({}: Props) => {
  return (
    <AppScreen padded={false}>
      <Container>
        <Heading>Deine Foren</Heading>
      </Container>
      <ForumOverviewList forums={PROTOTYPE_FORUMS} />
    </AppScreen>
  );
};

export default ForumsOverviewScreen;
