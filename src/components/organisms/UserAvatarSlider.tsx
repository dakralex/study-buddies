import React from 'react';
import HorizontalView from '../atoms/HorizontalView';
import UserAvatarItem from '../molecules/UserAvatarItem';

import {Users} from '../../features/users/types';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

type UserAvatarSliderProps = {
  style?: StyleProp<ViewStyle>;
  users: Users;
};

const UserAvatarSlider = ({style, users}: UserAvatarSliderProps) => {
  return (
    <HorizontalView style={[styles.userAvatarSliderContainer, style]}>
      {Object.values(users).map(user => (
        <UserAvatarItem
          user={user}
          key={user.id}
          style={styles.userAvatarItemContainer}
        />
      ))}
    </HorizontalView>
  );
};

const styles = StyleSheet.create({
  userAvatarSliderContainer: {
    paddingHorizontal: 16,
    marginRight: -16,
  },
  userAvatarItemContainer: {
    marginRight: 32,
  },
});

export default UserAvatarSlider;
