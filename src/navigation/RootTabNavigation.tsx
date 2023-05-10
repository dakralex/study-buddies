import React from 'react';
import {RootTabParamList} from './types';
import HomeScreen from '../screens/RootTab/HomeScreen';
import ForumsScreen from '../screens/RootTab/ForumsScreen';
import CoursesScreen from '../screens/RootTab/CoursesScreen';
import MessagesScreen from '../screens/RootTab/MessagesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const RootTab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigation = () => {
  return (
    <RootTab.Navigator id="RootTab" initialRouteName="Home">
      <RootTab.Screen name="Home" component={HomeScreen} />
      <RootTab.Screen name="Courses" component={CoursesScreen} />
      <RootTab.Screen name="Forums" component={ForumsScreen} />
      <RootTab.Screen name="Messages" component={MessagesScreen} />
    </RootTab.Navigator>
  );
};

export default RootTabNavigation;
