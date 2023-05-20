import React from 'react';
import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import Heading from '../../components/atoms/text/Heading';
import NormalText from '../../components/atoms/text/NormalText';
import PostItemList from '../../components/organisms/PostItemList';

import {PROTOTYPE_FORUMS} from '../../features/forums/forums';
import {ForumsDetailsScreenProps as Props} from '../../navigation/types';

const ForumsDetailsScreen = ({route}: Props) => {
  const {
    params: {forumId},
  } = route;
  const forum = PROTOTYPE_FORUMS[forumId];
  return (
    <AppScreen scroll={false} padded={false}>
      {!forum ? (
        <NormalText>Das Forum konnte nicht gefunden werden!</NormalText>
      ) : (
        <Container>
          <Heading> {forum.title} </Heading>
          <PostItemList forumId={forum.id} posts={forum.posts} />
        </Container>
      )}
    </AppScreen>
  );
};

export default ForumsDetailsScreen;
