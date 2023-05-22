import React, {useEffect} from 'react';
import AppScreen from '../AppScreen';
import Container from '../../components/atoms/Container';
import NormalText from '../../components/atoms/text/NormalText';
import FullPostItem from '../../components/molecules/FullPostItem';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import FullPostItemList from '../../components/organisms/FullPostItemList';

import {PROTOTYPE_FORUMS} from '../../features/forums/forums';
import {PostDetailsScreenProps as Props} from '../../navigation/types';

const PostDetailsScreen = ({route, navigation}: Props) => {
  const {postId, forumId} = route.params;
  const forum = PROTOTYPE_FORUMS[forumId];
  const post = forum?.posts[postId];

  useEffect(() => {
    navigation.setOptions({title: post?.title ?? 'Nicht gefunden'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post?.title]);

  return (
    <AppScreen scroll={true} padded={false}>
      {!post ? (
        <Container>
          <NormalText>Der Post konnte nicht gefunden werden.</NormalText>
        </Container>
      ) : (
        <React.Fragment>
          <FullPostItem post={post} />
          <FullPostItemList posts={post.answers ?? {}} />
          <Container>
            <PrimaryButton
              onPress={() => {
                navigation.navigate('PostCreate');
              }}>
              Antwort erstellen
            </PrimaryButton>
          </Container>
        </React.Fragment>
      )}
    </AppScreen>
  );
};

export default PostDetailsScreen;
