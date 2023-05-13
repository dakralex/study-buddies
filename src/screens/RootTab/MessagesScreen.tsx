import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MessagesScreenProps as Props} from '../../navigation/types';
import SubHeading from '../../components/atoms/text/SubHeading';
import AppScreen from '../AppScreen';

const MessagesScreen = ({}: Props) => {
  return (
    <AppScreen>
      <View style={styles.messagesScreenContainer}>
        <SubHeading>Work in progress.</SubHeading>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  messagesScreenContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MessagesScreen;
