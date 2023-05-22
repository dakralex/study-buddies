import React, {useEffect, useState} from 'react';
import AppScreen from '../AppScreen';
import {StyleSheet, TextInput} from 'react-native';
import {useColorPalette} from '../../hooks/Colors';
import spacingsStyles from '../../styles/Spacings';
import Container from '../../components/atoms/Container';
import SubSubHeading from '../../components/atoms/text/SubSubHeading';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';

import {PostCreateScreenProps as Props} from '../../navigation/types';

const PostCreateScreen = ({route, navigation}: Props) => {
  const colorPalette = useColorPalette();
  const {isParentPost} = route.params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
            navigation.goBack();
          }}>
          Post hinzufügen
        </PrimaryButton>
      </Container>
    </AppScreen>
  );
};

export default PostCreateScreen;
