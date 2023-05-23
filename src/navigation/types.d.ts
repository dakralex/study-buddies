import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {ForumsKey, PostsKey} from '../features/forums/types';

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
  //  Messages: undefined;
};

export type CoursesStackParamList = {
  CoursesOverview: undefined;
  CourseDetails: {courseId: string};
};

export type ForumsStackParamList = {
  ForumsOverview: undefined;
  ForumsDetails: {forumId: ForumsKey};
  PostDetails: {forumId: ForumsKey; postId: PostsKey};
  PostCreate: {forumId: ForumsKey; postId?: PostsKey};
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

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type RootTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList>,
  RootStackNavigationProp
>;

export type CoursesStackNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<CoursesStackParamList>,
  RootTabNavigationProp
>;

export type ForumsStackNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<CoursesStackParamList>,
  RootTabNavigationProp
>;

export type AppNavigation = CompositeNavigationProp<
  CoursesStackNavigationProp,
  ForumsStackNavigationProp
>;

export type ProfileScreenProps = RootStackScreenProps<'Profile'>;
export type NotificationsScreenProps = RootStackScreenProps<'Notifications'>;

export type HomeScreenProps = RootTabScreenProps<'Home'>;
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
