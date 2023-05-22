import React from 'react';
import AppScreen from '../AppScreen';
import ForumOverviewList from '../../components/organisms/ForumOverviewList';

import {PROTOTYPE_FORUMS} from '../../features/forums/forums';
import {ForumsOverviewScreenProps as Props} from '../../navigation/types';

const ForumsOverviewScreen = ({}: Props) => {
  return (
    <AppScreen scroll={true} padded={false}>
      <ForumOverviewList forums={PROTOTYPE_FORUMS} />
    </AppScreen>
  );
};

export default ForumsOverviewScreen;
