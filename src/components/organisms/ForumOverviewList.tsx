import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Forums} from '../../features/forums/types';
import SearchResultItem from '../molecules/SearchResultItem';

type ForumOverviewListProps = {
  forums: Forums;
};

const ForumOverviewList = ({forums}: ForumOverviewListProps) => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.forumListContainer}
      data={Object.values(forums)}
      renderItem={({item: forum}) => (
        <SearchResultItem
          title={forum.title}
          description={`${Object.values(forum.posts).length} Posts`}
          onPress={() => {
            navigation.navigate('ForumsDetails', {
              forumId: forum.id,
            });
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  forumListContainer: {
    paddingVertical: 16,
  },
});

export default ForumOverviewList;
