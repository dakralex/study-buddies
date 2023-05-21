import React, {useState} from 'react';
import AppScreen from '../AppScreen';
import {PostCreateScreenProps as Props} from '../../navigation/types';
import InputComponent from '../../components/atoms/InputComponent';
import PrimaryButton from '../../components/atoms/buttons/PrimaryButton';
import {View} from 'react-native';

const PostCreateScreen = ({navigation}: Props) => {
  const [post, setPost] = useState('');
  return (
    <AppScreen>
      <React.Fragment>
        <InputComponent updateState={setPost} />
        <View style={{paddingTop: 12}}>
          <PrimaryButton
            onPress={() => {
              navigation.goBack();
            }}>
            Post hinzufügen
          </PrimaryButton>
        </View>
      </React.Fragment>
    </AppScreen>
  );
};

export default PostCreateScreen;
