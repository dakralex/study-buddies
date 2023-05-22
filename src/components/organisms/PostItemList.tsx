import React from 'react';
import PostItem from '../molecules/PostItem';
import {useNavigation} from '@react-navigation/native';
import {FlatList, StyleProp, ViewStyle} from 'react-native';

import {Posts} from '../../features/forums/types';
import {AppNavigation} from '../../navigation/types';
import Container from '../atoms/Container';
import Divider from '../atoms/Divider';

type PostListProps = {
  style?: StyleProp<ViewStyle>;
  posts: Posts;
  forumId: String;
};

const PostItemList = ({style, posts, forumId}: PostListProps) => {
  const navigation = useNavigation<AppNavigation>();

  return (
    <FlatList
      style={style}
      scrollEnabled={false}
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
      keyExtractor={item => item.id}
    />
  );
};

export default PostItemList;
