import React from 'react';
import {Posts} from '../../features/forums/types';
import {useNavigation} from '@react-navigation/native';
import {FlatList, StyleSheet} from 'react-native';
import PostItem from '../molecules/PostItem';

type PostListProps = {
  posts: Posts;
};

const PostItemList = ({posts}: PostListProps) => {
  const navigation = useNavigation();
  return (
    <FlatList
      style={styles.postListContainer}
      data={Object.values(posts)}
      renderItem={({item: posts}) => (
        <PostItem
          post={posts}
          onPress={() => {
            navigation.navigate('PostDetail', {
              id: posts.id,
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
