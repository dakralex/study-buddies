import React from 'react';
import {Posts} from '../../features/forums/types';
import {FlatList, StyleSheet} from 'react-native';
import FullPostItem from '../molecules/FullPostItem';

type FullPostListProps = {
  posts: Posts;
};

const FullPostItemList = ({posts}: FullPostListProps) => {
  return (
    <FlatList
      style={styles.postListContainer}
      data={Object.values(posts)}
      renderItem={({item: posts}) => <FullPostItem post={posts} />}
    />
  );
};

const styles = StyleSheet.create({
  postListContainer: {
    paddingVertical: 16,
  },
});

export default FullPostItemList;
