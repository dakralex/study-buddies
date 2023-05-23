import React, {useEffect, useState} from 'react';
import AppScreen from '../AppScreen';
import {StyleSheet, TextInput} from 'react-native';
import {useColorPalette} from '../../hooks/Colors';
import spacingsStyles from '../../styles/Spacings';
import Container from '../../components/atoms/Container';
import SubSubHeading from '../../components/atoms/text/SubSubHeading';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';

import {Answer, Post} from '../../features/forums/types';
import {useAppDispatch} from '../../store/configureStore';
import {addAnswer, addPost} from '../../features/forums/forumsSlice';

import {PostCreateScreenProps as Props} from '../../navigation/types';

const PostCreateScreen = ({route, navigation}: Props) => {
  const dispatch = useAppDispatch();
  const colorPalette = useColorPalette();
  const {forumId, postId} = route.params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const isParentPost = postId === undefined;

  useEffect(() => {
    navigation.setOptions({
      title: isParentPost ? 'Post erstellen' : 'Antwort schreiben',
    });
  }, [isParentPost]);

  const styles = StyleSheet.create({
    inputElement: {
      padding: 15,
      borderWidth: 2,
      color: colorPalette.foreground,
      borderColor: colorPalette.foreground,
      borderRadius: 10,
      textAlignVertical: 'top',
    },
  });

  return (
    <AppScreen padded={false}>
      {isParentPost && (
        <Container style={spacingsStyles.sectionSpacingBottomMedium}>
          <SubSubHeading style={spacingsStyles.sectionSpacingBottomSmall}>
            Titel
          </SubSubHeading>
          <TextInput
            style={styles.inputElement}
            placeholderTextColor={colorPalette.lightGray}
            value={title}
            onChangeText={i => setTitle(i)}
            placeholder="Kann mir wer sagen..."
          />
        </Container>
      )}
      <Container>
        <SubSubHeading style={spacingsStyles.sectionSpacingBottomSmall}>
          Inhalt
        </SubSubHeading>
        <TextInput
          style={[
            styles.inputElement,
            spacingsStyles.sectionSpacingBottomMedium,
          ]}
          placeholderTextColor={colorPalette.lightGray}
          multiline
          maxLength={500}
          numberOfLines={7}
          value={content}
          onChangeText={i => setContent(i)}
          placeholder="Ich brauche Hilfe bei..."
        />
        <PrimaryButton
          onPress={() => {
            const input: Omit<Post, 'id'> | Omit<Answer, 'id'> = {
              title,
              content,
              author_id: '558966f0-ea4d-4bcc-bc14-544b07b28182', // TODO Remove hardcoded author
              forum_id: forumId,
              timestamp: new Date().toUTCString(),
            };

            if (isParentPost) {
              dispatch(addPost({forumId, post: input}));
            } else {
              dispatch(
                addAnswer({forumId, postId: postId as string, answer: input}),
              );
            }

            navigation.goBack();
          }}>
          Post hinzufügen
        </PrimaryButton>
      </Container>
    </AppScreen>
  );
};

export default PostCreateScreen;
