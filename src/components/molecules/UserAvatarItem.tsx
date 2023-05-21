import React from 'react';
import {User} from '../../features/users/types';
import {Image, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import SmallText from '../atoms/text/SmallText';

type UserAvatarItemProps = {
  style?: StyleProp<ViewStyle>;
  user: User;
};

const UserAvatarItem = ({style, user}: UserAvatarItemProps) => {
  return (
    <View style={[styles.userAvatarContainer, style]}>
      <Image style={styles.imageContainer} source={user.avatar} />
      <SmallText style={styles.textContainer}>{user.username}</SmallText>
    </View>
  );
};

const styles = StyleSheet.create({
  userAvatarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 9999,
  },
  textContainer: {
    paddingTop: 10,
  },
});

export default UserAvatarItem;
