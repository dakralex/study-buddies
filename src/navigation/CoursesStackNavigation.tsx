import React from 'react';
import {CoursesStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoursesCreateScreen from '../screens/CoursesStack/CoursesCreateScreen';
import CoursesDetailsScreen from '../screens/CoursesStack/CoursesDetailsScreen';
import CoursesOverviewScreen from '../screens/CoursesStack/CoursesOverviewScreen';

const CoursesStack = createNativeStackNavigator<CoursesStackParamList>();

const CoursesStackNavigation = () => {
  return (
    <CoursesStack.Navigator
      id="CoursesStack"
      initialRouteName="CoursesOverview"
      screenOptions={{headerShown: false}}>
      <CoursesStack.Screen
        name="CoursesOverview"
        component={CoursesOverviewScreen}
      />
      <CoursesStack.Screen
        name="CourseDetails"
        component={CoursesDetailsScreen}
      />
      <CoursesStack.Screen
        name="CourseCreate"
        component={CoursesCreateScreen}
      />
    </CoursesStack.Navigator>
  );
};

export default CoursesStackNavigation;
