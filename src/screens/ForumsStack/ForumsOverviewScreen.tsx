import React from 'react';
import AppScreen from '../AppScreen';
import {ForumsOverviewScreenProps as Props} from '../../navigation/types';
import Heading from '../../components/atoms/text/Heading';
import ForumOverviewList from '../../components/organisms/FourmOverviewList';
import {PROTOTYPE_FORUMS} from '../../features/forums/forums';

const ForumsOverviewScreen = ({}: Props) => {
  return (
    <AppScreen scroll={false} padded={false}>
      <Heading>Deine Foren</Heading>
      <ForumOverviewList forums={PROTOTYPE_FORUMS} />
    </AppScreen>
  );
};

export default ForumsOverviewScreen;
