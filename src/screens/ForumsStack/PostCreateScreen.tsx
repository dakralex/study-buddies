import React, {useState} from 'react';
import AppScreen from '../AppScreen';
import {StyleSheet, Text, TextInput} from 'react-native';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';

import {PostCreateScreenProps as Props} from '../../navigation/types';

const PostCreateScreen = ({navigation}: Props) => {
  const [, setPost] = useState('');

  return (
    <AppScreen>
      <TextInput
        placeholder="Title"
        style={styles.input}
        onChangeText={i => setPost(i)}
      />
      <Text style={styles.label}>Dein Post</Text>
      <TextInput
        editable
        multiline={true}
        numberOfLines={7}
        maxLength={300}
        placeholder="Schreib etwas..."
        style={styles.input}
        onChangeText={i => setPost(i)}
      />
      <PrimaryButton
        onPress={() => {
          navigation.goBack();
        }}>
        Post hinzufügen
      </PrimaryButton>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: '#999',
    borderRadius: 10,
    height: 40,
    padding: 10,
  },
  label: {
    padding: 5,
    marginTop: 10,
  },
});

export default PostCreateScreen;
