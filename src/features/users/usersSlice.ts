import uuid from 'react-native-uuid';
import {PROTOTYPE_USERS} from './prototype';
import {User, Users, UsersKey} from './types';
import {RootState} from '../../store/configureStore';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UsersState {
  users: Users;
}

type UserInput = Omit<User, 'id'>;

const initialState: UsersState = {
  users: PROTOTYPE_USERS,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state: UsersState, action: PayloadAction<UserInput>) => {
      const user: User = {
        id: uuid.v4(),
        ...action.payload,
      };

      state.users[user.id] = user;
    },
  },
});

export const selectUsersById = (state: RootState, userIds: Array<UsersKey>) =>
  userIds.reduce((obj, key) => {
    if (state.users.users && state.users.users.hasOwnProperty(key)) {
      obj[key] = state.users.users[key];
    }
    return obj;
  }, {});

export const selectUser = (state: RootState, userId: UsersKey) =>
  state.users.users[userId];

export const {addUser} = usersSlice.actions;
export default usersSlice.reducer;
