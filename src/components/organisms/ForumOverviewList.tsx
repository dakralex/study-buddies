import React from 'react';
import {FlatList} from 'react-native';
import Divider from '../atoms/Divider';
import {useNavigation} from '@react-navigation/native';
import SearchResultItem from '../molecules/SearchResultItem';

import {Forums} from '../../features/forums/types';
import {AppNavigation} from '../../navigation/types';

type ForumOverviewListProps = {
  forums: Forums;
};

const ForumOverviewList = ({forums}: ForumOverviewListProps) => {
  const navigation = useNavigation<AppNavigation>();

  return (
    <FlatList
      scrollEnabled={false}
      data={Object.values(forums)}
      renderItem={({item: forum}) => (
        <React.Fragment>
          <SearchResultItem
            title={forum.title}
            description={`${Object.values(forum.posts).length} Posts`}
            onPress={() => {
              navigation.navigate('ForumsDetails', {
                forumId: forum.id,
              });
            }}
          />
          <Divider height={2} />
        </React.Fragment>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default ForumOverviewList;
