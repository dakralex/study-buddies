import React from 'react';
import {RootStackParamList} from './types';
import RootTabNavigation from './RootTabNavigation';
import useNavigationStyles from '../styles/Navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationsScreen from '../screens/RootStack/NotificationsScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  const navigationStyles = useNavigationStyles();

  return (
    <RootStack.Navigator
      id="RootStack"
      initialRouteName="Root"
      screenOptions={{
        headerStyle: navigationStyles.headerContainer,
        headerTitleStyle: navigationStyles.headerText,
        headerTintColor: navigationStyles.headerBackButton.color,
      }}>
      <RootStack.Screen
        name="Root"
        component={RootTabNavigation}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{title: 'Deine Benachrichtigungen'}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
