import React from 'react';
import {User} from '../../features/users/types';
import {Image, View} from 'react-native';
import SmallText from '../atoms/text/SmallText';

type UserAvatarItemProps = {
  user: User;
};

const UserAvatarItem = ({user}: UserAvatarItemProps) => {
  return (
    <View>
      <Image source={require(`../../assets/avatars/${user.id}.jpg`)} />
      <SmallText>{user.username}</SmallText>
    </View>
  );
};

export default UserAvatarItem;
