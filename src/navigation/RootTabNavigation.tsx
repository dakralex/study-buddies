import React from 'react';
import {RootTabParamList} from './types';
import Icon from '../components/atoms/Icon';
import HomeScreen from '../screens/RootTab/HomeScreen';
import useNavigationStyles from '../styles/Navigation';
import CoursesStackNavigation from './CoursesStackNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ForumsStackNavigation from './ForumsStackNavigation';

const RootTab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigation = () => {
  const navigationStyles = useNavigationStyles();

  return (
    <RootTab.Navigator
      id="RootTab"
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerStyle: navigationStyles.headerContainer,
        headerTitleStyle: navigationStyles.headerText,
        tabBarStyle: navigationStyles.tabBarContainer,
        tabBarLabelStyle: navigationStyles.tabBarText,
        tabBarActiveTintColor: navigationStyles.tabBarTextActive.color,
      }}>
      <RootTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'StudyBuddies',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <RootTab.Screen
        name="Courses"
        component={CoursesStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'library' : 'library-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <RootTab.Screen
        name="Forums"
        component={ForumsStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'file-tray-stacked' : 'file-tray-stacked-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </RootTab.Navigator>
  );
};

export default RootTabNavigation;
