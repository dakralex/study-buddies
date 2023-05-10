import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {RootStackParamList} from './RootNavigation';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

/**                                                                          **/
/**                         NAVIGATION PARAM LISTS                           **/
/**                                                                          **/

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList>;
  Profile: {userId: string};
  Notifications: undefined;
  NotFound: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Courses: undefined;
  Forums: undefined;
  Messages: undefined;
};

/**                                                                          **/
/**                                SCREEN TYPES                              **/
/**                                                                          **/

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootTabScreenProps<T extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type ProfileScreenProps = RootStackScreenProps<'Profile'>;
export type NotificationsScreenProps = RootStackScreenProps<'Notifications'>;

export type HomeScreenProps = RootTabScreenProps<'Home'>;
export type CoursesScreenProps = RootTabScreenProps<'Courses'>;
export type ForumsScreenProps = RootTabScreenProps<'Forums'>;
export type MessagesScreenProps = RootTabScreenProps<'Messages'>;

/**                                                                          **/
/**                               DEFAULT TYPES                              **/
/**                                                                          **/

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
