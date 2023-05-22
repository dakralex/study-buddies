import React from 'react';
import PostItem from '../molecules/PostItem';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Posts} from '../../features/forums/types';
import {AppNavigation} from '../../navigation/types';
import Container from '../atoms/Container';
import Divider from '../atoms/Divider';

type PostListProps = {
  posts: Posts;
  forumId: String;
};

const PostItemList = ({posts, forumId}: PostListProps) => {
  const navigation = useNavigation<AppNavigation>();

  return (
    <FlatList
      style={styles.postListContainer}
      data={Object.values(posts)}
      renderItem={({item: post}) => (
        <Container>
          <PostItem
            post={post}
            onPress={() => {
              navigation.navigate('PostDetails', {
                postId: post.id,
                forumId: forumId,
              });
            }}
          />
          <Divider height={2} />
        </Container>
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
