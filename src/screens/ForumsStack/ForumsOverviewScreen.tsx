import React from 'react';
import AppScreen from '../AppScreen';
import ForumOverviewList from '../../components/organisms/ForumOverviewList';

import {useAppSelector} from '../../store/configureStore';
import {selectForums} from '../../features/forums/forumsSlice';

import {ForumsOverviewScreenProps as Props} from '../../navigation/types';

const ForumsOverviewScreen = ({}: Props) => {
  const forums = useAppSelector(selectForums);

  return (
    <AppScreen scroll={true} padded={false}>
      <ForumOverviewList forums={forums} />
    </AppScreen>
  );
};

export default ForumsOverviewScreen;
