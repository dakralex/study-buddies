import React from 'react';
import AppScreen from '../AppScreen';
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
    <AppScreen>
      {!post ? (
        <NormalText>Der Post konnte nicht gefunden werden.</NormalText>
      ) : (
        <React.Fragment>
          <FullPostItem post={post} />
          <FullPostItemList posts={post.answers ?? {}} />
        </React.Fragment>
      )}
    </AppScreen>
  );
};

export default PostDetailsScreen;
