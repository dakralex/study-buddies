import React from 'react';
import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import NormalText from '../../components/atoms/text/NormalText';
import FullPostItem from '../../components/molecules/FullPostItem';
import FullPostItemList from '../../components/organisms/FullPostItemList';

import {PROTOTYPE_FORUMS} from '../../features/forums/forums';
import {PostDetailsScreenProps as Props} from '../../navigation/types';

const PostDetailsScreen = ({route}: Props) => {
  const {
    params: {postId, forumId},
  } = route;
  const forum = PROTOTYPE_FORUMS[forumId];
  const post = forum?.posts[postId];

  return (
    <AppScreen scroll={false} padded={false}>
      {!post ? (
        <NormalText>Der Post konnte nicht gefunden werden.</NormalText>
      ) : (
        <Container>
          <FullPostItem post={post} />
          <FullPostItemList posts={post.answers ?? {}} />
        </Container>
      )}
    </AppScreen>
  );
};

export default PostDetailsScreen;
