import React from 'react';
import AppScreen from '../AppScreen';
import Heading from '../../components/atoms/text/Heading';
import NormalText from '../../components/atoms/text/NormalText';
import PostItemList from '../../components/organisms/PostItemList';

import {PROTOTYPE_FORUMS} from '../../features/forums/forums';
import {ForumsDetailsScreenProps as Props} from '../../navigation/types';
import Container from '../../components/atoms/Container';

const ForumsDetailsScreen = ({route}: Props) => {
  const {forumId} = route.params;
  const forum = PROTOTYPE_FORUMS[forumId];

  return (
    <AppScreen scroll={false} padded={false}>
      {!forum ? (
        <NormalText>Das Forum konnte nicht gefunden werden.</NormalText>
      ) : (
        <React.Fragment>
          <Container>
            <Heading>{forum.title}</Heading>
          </Container>
          <PostItemList forumId={forum.id} posts={forum.posts} />
        </React.Fragment>
      )}
    </AppScreen>
  );
};

export default ForumsDetailsScreen;
