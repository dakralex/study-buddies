import React from 'react';
import {RootStackParamList} from './types';
import RootTabNavigation from './RootTabNavigation';
import ProfileScreen from '../screens/RootStack/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationsScreen from '../screens/RootStack/NotificationsScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      id="RootStack"
      initialRouteName="Root"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Root" component={RootTabNavigation} />
      <RootStack.Screen name="Profile" component={ProfileScreen} />
      <RootStack.Screen name="Notifications" component={NotificationsScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;