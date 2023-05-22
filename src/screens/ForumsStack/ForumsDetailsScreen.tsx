import React, {useEffect} from 'react';
import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import NormalText from '../../components/atoms/text/NormalText';
import PostItemList from '../../components/organisms/PostItemList';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';

import {PROTOTYPE_FORUMS} from '../../features/forums/forums';
import {ForumsDetailsScreenProps as Props} from '../../navigation/types';

const ForumsDetailsScreen = ({route, navigation}: Props) => {
  const {forumId} = route.params;
  const forum = PROTOTYPE_FORUMS[forumId];

  useEffect(() => {
    navigation.setOptions({title: forum.title ?? 'Nicht gefunden'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forum?.title]);

  return (
    <AppScreen scroll={true} padded={false}>
      {!forum ? (
        <Container>
          <NormalText>Das Forum konnte nicht gefunden werden.</NormalText>
        </Container>
      ) : (
        <React.Fragment>
          <PostItemList forumId={forum.id} posts={forum.posts} />
          <Container>
            <PrimaryButton
              onPress={() => {
                navigation.navigate('PostCreate');
              }}>
              Neuen Post erstellen
            </PrimaryButton>
          </Container>
        </React.Fragment>
      )}
    </AppScreen>
  );
};

export default ForumsDetailsScreen;
