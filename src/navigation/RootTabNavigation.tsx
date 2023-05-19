import React from 'react';
import {RootTabParamList} from './types';
import Icon from '../components/atoms/Icon';
import HomeScreen from '../screens/RootTab/HomeScreen';
import useNavigationStyles from '../styles/Navigation';
import DebugScreen from '../screens/RootTab/DebugScreen';
import CoursesStackNavigation from './CoursesStackNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ForumsOverviewScreen from '../screens/RootTab/ForumsOverviewScreen';

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
        component={ForumsOverviewScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'file-tray-stacked' : 'file-tray-stacked-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      {
        <RootTab.Screen
          name="Debug"
          component={DebugScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon
                name={focused ? 'bug' : 'bug-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      }
    </RootTab.Navigator>
  );
};

export default RootTabNavigation;
