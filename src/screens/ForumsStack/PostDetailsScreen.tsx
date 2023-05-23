import React, {useEffect} from 'react';
import AppScreen from '../AppScreen';
import Divider from '../../components/atoms/Divider';
import Container from '../../components/atoms/Container';
import NormalText from '../../components/atoms/text/NormalText';
import FullPostItem from '../../components/molecules/FullPostItem';
import FullPostItemList from '../../components/organisms/FullPostItemList';
import FloatingActionButton from '../../components/atoms/buttons/FloatingActionButton';

import {useAppSelector} from '../../store/configureStore';
import {selectPost} from '../../features/forums/forumsSlice';

import {PostDetailsScreenProps as Props} from '../../navigation/types';

const PostDetailsScreen = ({route, navigation}: Props) => {
  const {forumId, postId} = route.params;
  const post = useAppSelector(state => selectPost(state, forumId, postId));

  useEffect(() => {
    navigation.setOptions({title: post?.title ?? 'Nicht gefunden'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post?.title]);

  return (
    <AppScreen
      scroll={true}
      padded={false}
      BottomComponent={
        <FloatingActionButton
          buttonProps={{
            onPress: () => {
              navigation.navigate('PostCreate', {
                forumId: forumId,
                postId: postId,
              });
            },
          }}>
          Antwort schreiben
        </FloatingActionButton>
      }>
      {!post ? (
        <Container>
          <NormalText>Der Post konnte nicht gefunden werden.</NormalText>
        </Container>
      ) : (
        <React.Fragment>
          <Container>
            <FullPostItem post={post} />
            <Divider height={3} />
          </Container>
          {!post.answers ? (
            <Container>
              <NormalText style={{paddingVertical: 16, textAlign: 'center'}}>
                Noch keine Antwort, sei die/der Erste!
              </NormalText>
            </Container>
          ) : (
            <Container>
              <FullPostItemList posts={post.answers} />
            </Container>
          )}
        </React.Fragment>
      )}
    </AppScreen>
  );
};

export default PostDetailsScreen;
