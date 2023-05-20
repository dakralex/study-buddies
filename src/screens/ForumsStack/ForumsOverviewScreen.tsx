import React from 'react';
import AppScreen from '../AppScreen';
import {ForumsOverviewScreenProps as Props} from '../../navigation/types';
import Heading from '../../components/atoms/text/Heading';
import ForumOverviewList from '../../components/organisms/FourmOverviewList';

const ForumsOverviewScreen = ({}: Props) => {
  return (
    <AppScreen scroll={true} padded={false}>
      <Heading>Deine Foren</Heading>
      <ForumOverviewList
        forums={[
          {title: 'MG1', posts: '17 Posts', id: 1},
          {title: 'ADS', posts: '45 Posts', id: 2},
          {title: 'HCI', posts: '30 Posts', id: 3},
          {title: 'PLC', posts: '15 Posts', id: 4},
          {title: 'THI', posts: '17 Posts', id: 5},
          {title: 'TGI', posts: '70 Posts', id: 6},
          {title: 'DBS', posts: '17 Posts', id: 7},
        ]}
      />
    </AppScreen>
  );
};

export default ForumsOverviewScreen;
