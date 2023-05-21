import React from 'react';
import UserAvatarItem from '../molecules/UserAvatarItem';
import HorizontalView from '../atoms/HorizontalView';
import {Users} from '../../features/users/types';
import {StyleSheet} from 'react-native';

type UserAvatarSliderProps = {
  users: Users;
};

const UserAvatarSlider = ({users}: UserAvatarSliderProps) => {
  return (
    <HorizontalView style={styles.userAvatarSliderContainer}>
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
