import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
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
  Courses: NavigatorScreenParams<CoursesStackParamList>;
  Forums: NavigatorScreenParams<ForumsStackParamList>;
  Debug: undefined;
  //  Messages: undefined;
};

export type CoursesStackParamList = {
  CoursesOverview: undefined;
  CourseDetails: {courseId: string};
};

export type ForumsStackParamList = {
  ForumsOverview: undefined;
  ForumsDetails: {forumId: string};
  PostDetails: {forumId: string; postId: string};
  PostCreate: undefined;
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

export type CoursesStackScreenProps<T extends keyof CoursesStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<CoursesStackParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;

export type ForumsStackScreenProps<T extends keyof ForumsStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ForumsStackParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;

export type ProfileScreenProps = RootStackScreenProps<'Profile'>;
export type NotificationsScreenProps = RootStackScreenProps<'Notifications'>;

export type HomeScreenProps = RootTabScreenProps<'Home'>;
export type DebugScreenProps = RootTabScreenProps<'Debug'>;
export type MessagesScreenProps = RootTabScreenProps<'Messages'>;

export type CoursesOverviewScreenProps =
  CoursesStackScreenProps<'CoursesOverview'>;
export type CoursesDetailsScreenProps =
  CoursesStackScreenProps<'CourseDetails'>;

export type ForumsOverviewScreenProps =
  ForumsStackScreenProps<'ForumsOverview'>;
export type ForumsDetailsScreenProps = ForumsStackScreenProps<'ForumsDetails'>;
export type PostDetailsScreenProps = ForumsStackScreenProps<'PostDetails'>;
export type PostCreateScreenProps = ForumsStackScreenProps<'PostCreate'>;

/**                                                                          **/
/**                               DEFAULT TYPES                              **/
/**                                                                          **/

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
