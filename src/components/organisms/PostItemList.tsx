import React from 'react';
import PostItem from '../molecules/PostItem';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Posts} from '../../features/forums/types';

type PostListProps = {
  posts: Posts;
  forumId: String;
};

const PostItemList = ({posts, forumId}: PostListProps) => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.postListContainer}
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
    />
  );
};

const styles = StyleSheet.create({
  postListContainer: {
    paddingVertical: 16,
  },
});

export default PostItemList;
