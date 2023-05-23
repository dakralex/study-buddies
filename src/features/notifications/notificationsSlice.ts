import uuid from 'react-native-uuid';
import {Notification, Notifications} from './types';
import {PROTOTYPE_NOTIFICATIONS} from './prototype';
import {RootState} from '../../store/configureStore';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface NotificationsState {
  notifications: Notifications;
}

type NotificationInput = Omit<Notification, ['id']>;

const initialState: NotificationsState = {
  notifications: PROTOTYPE_NOTIFICATIONS,
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (
      state: NotificationsState,
      action: PayloadAction<NotificationInput>,
    ) => {
      const notification: Notification = {
        id: uuid.v4(),
        ...action.payload,
      };

      state.notifications[notification.id] = notification;
    },
  },
});

export const selectNotifications = (state: RootState) =>
  state.notifications.notifications;

export const selectRecentNotifications = (state: RootState) =>
  Object.fromEntries(
    Object.entries<Notification>(state.notifications.notifications).slice(0, 3),
  );

export const {addNotification} = notificationsSlice.actions;
export default notificationsSlice.reducer;
