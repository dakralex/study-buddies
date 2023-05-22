import React from 'react';
import {FlatList} from 'react-native';
import FullPostItem from '../molecules/FullPostItem';

import {Posts} from '../../features/forums/types';

type FullPostListProps = {
  posts: Posts;
};

const FullPostItemList = ({posts}: FullPostListProps) => {
  return (
    <FlatList
      scrollEnabled={false}
      data={Object.values(posts)}
      renderItem={({item: post}) => <FullPostItem post={post} />}
      keyExtractor={item => item.id}
    />
  );
};

export default FullPostItemList;
