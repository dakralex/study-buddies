import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import FullPostItem from '../molecules/FullPostItem';

import {Posts} from '../../features/forums/types';

type FullPostListProps = {
  posts: Posts;
};

const FullPostItemList = ({posts}: FullPostListProps) => {
  return (
    <FlatList
      style={styles.postListContainer}
      data={Object.values(posts)}
      renderItem={({item: post}) => <FullPostItem post={post} />}
    />
  );
};

const styles = StyleSheet.create({
  postListContainer: {
    paddingVertical: 16,
  },
});

export default FullPostItemList;
