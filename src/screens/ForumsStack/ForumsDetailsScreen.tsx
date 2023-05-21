import React from 'react';
import AppScreen from '../AppScreen';
import Heading from '../../components/atoms/text/Heading';
import NormalText from '../../components/atoms/text/NormalText';
import PostItemList from '../../components/organisms/PostItemList';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';

import {PROTOTYPE_FORUMS} from '../../features/forums/forums';
import {ForumsDetailsScreenProps as Props} from '../../navigation/types';
import Container from '../../components/atoms/Container';

const ForumsDetailsScreen = ({route, navigation}: Props) => {
  const {forumId} = route.params;
  const forum = PROTOTYPE_FORUMS[forumId];

  return (
    <AppScreen padded={false}>
      {!forum ? (
        <Container>
          <NormalText>Das Forum konnte nicht gefunden werden.</NormalText>
        </Container>
      ) : (
        <React.Fragment>
          <Container>
            <Heading>{forum.title}</Heading>
          </Container>
          <PostItemList forumId={forum.id} posts={forum.posts} />
          <PrimaryButton
            onPress={() => {
              navigation.navigate('PostCreate');
            }}>
            Neuen Post erstellen
          </PrimaryButton>
        </React.Fragment>
      )}
    </AppScreen>
  );
};

export default ForumsDetailsScreen;
