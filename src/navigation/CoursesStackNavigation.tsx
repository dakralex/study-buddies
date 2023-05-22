import React from 'react';
import useNavigationStyles from '../styles/Navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoursesDetailsScreen from '../screens/CoursesStack/CoursesDetailsScreen';
import CoursesOverviewScreen from '../screens/CoursesStack/CoursesOverviewScreen';

import {CoursesStackParamList} from './types';

const CoursesStack = createNativeStackNavigator<CoursesStackParamList>();

const CoursesStackNavigation = () => {
  const navigationStyles = useNavigationStyles();

  return (
    <CoursesStack.Navigator
      id="CoursesStack"
      initialRouteName="CoursesOverview"
      screenOptions={{
        headerStyle: navigationStyles.headerContainer,
        headerTitleStyle: navigationStyles.headerText,
        headerTintColor: navigationStyles.headerBackButton.color,
      }}>
      <CoursesStack.Screen
        name="CoursesOverview"
        component={CoursesOverviewScreen}
        options={{
          title: 'Deine Kurse',
        }}
      />
      <CoursesStack.Screen
        name="CourseDetails"
        component={CoursesDetailsScreen}
      />
    </CoursesStack.Navigator>
  );
};

export default CoursesStackNavigation;
