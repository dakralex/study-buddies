import React, {useEffect} from 'react';
import AppScreen from '../AppScreen';
import spacingsStyles from '../../styles/Spacings';
import Container from '../../components/atoms/Container';
import NormalText from '../../components/atoms/text/NormalText';
import PostItemList from '../../components/organisms/PostItemList';
import FloatingActionButton from '../../components/atoms/buttons/FloatingActionButton';

import {useAppSelector} from '../../store/configureStore';
import {selectForum} from '../../features/forums/forumsSlice';

import {ForumsDetailsScreenProps as Props} from '../../navigation/types';

const ForumsDetailsScreen = ({route, navigation}: Props) => {
  const {forumId} = route.params;
  const forum = useAppSelector(state => selectForum(state, forumId));

  useEffect(() => {
    navigation.setOptions({title: forum.title ?? 'Nicht gefunden'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forum?.title]);

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
                postId: undefined,
              });
            },
          }}>
          Post erstellen
        </FloatingActionButton>
      }>
      {!forum ? (
        <Container>
          <NormalText>Das Forum konnte nicht gefunden werden.</NormalText>
        </Container>
      ) : (
        <React.Fragment>
          <PostItemList
            style={spacingsStyles.sectionSpacingBottomSmall}
            forumId={forum.id}
            posts={forum.posts}
          />
        </React.Fragment>
      )}
    </AppScreen>
  );
};

export default ForumsDetailsScreen;
