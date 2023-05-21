import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type InputComponentProps = {
  updateState: React.Dispatch<React.SetStateAction<string>>;
};
const InputComponent = ({updateState}: InputComponentProps) => {
  return (
    <View>
      <TextInput
        placeholder="Title"
        style={styles.input}
        onChangeText={i => updateState(i)}
      />
      <Text style={styles.label}>Dein Post</Text>
      <TextInput
        editable
        multiline={true}
        numberOfLines={7}
        maxLength={300}
        placeholder="Schreib etwas..."
        style={styles.input}
        onChangeText={i => updateState(i)}
      />
    </View>
  );
};

export default InputComponent;

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
