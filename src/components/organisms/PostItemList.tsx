import React from 'react';
import {FlatList} from 'react-native';
import PostItem from '../molecules/PostItem';
import {useNavigation} from '@react-navigation/native';

import {Posts} from '../../features/forums/types';
import {AppNavigation} from '../../navigation/types';

type PostListProps = {
  posts: Posts;
  forumId: String;
};

const PostItemList = ({posts, forumId}: PostListProps) => {
  const navigation = useNavigation<AppNavigation>();

  return (
    <FlatList
      scrollEnabled={false}
      data={Object.values(posts)}
      renderItem={({item: post}) => (
        <PostItem
          post={post}
          onPress={() => {
            navigation.navigate('PostDetails', {
              postId: post.id,
              forumId: forumId,
            });
          }}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default PostItemList;
