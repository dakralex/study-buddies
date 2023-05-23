import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import coursesReducer, {coursesSlice} from '../features/courses/coursesSlice';
import forumsReducer, {forumsSlice} from '../features/forums/forumsSlice';
import usersReducer, {usersSlice} from '../features/users/usersSlice';
import notificationsReducer, {
  notificationsSlice,
} from '../features/notifications/notificationsSlice';

const rootReducer = combineReducers({
  [coursesSlice.name]: coursesReducer,
  [forumsSlice.name]: forumsReducer,
  [usersSlice.name]: usersReducer,
  [notificationsSlice.name]: notificationsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
