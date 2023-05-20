import React from 'react';
import SearchResultItem from '../molecules/SearchResultItem';
import {Forums} from '../../features/forums/types';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type ForumOverviewListProps = {
  forums: Forums;
};

const ForumOverviewList = ({forums}: ForumOverviewListProps) => {
  const navigation = useNavigation();
  return (
    <FlatList
      style={styles.forumListContainer}
      data={forums}
      renderItem={({item: forums}) => (
        <SearchResultItem
          title={forums.title}
          description={forums.posts}
          onPress={() => {
            navigation.navigate('ForumsDetails', {
              id: forums.id,
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
