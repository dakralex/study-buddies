import React from 'react';
import useNavigationStyles from '../styles/Navigation';
import PostCreateScreen from '../screens/ForumsStack/PostCreateScreen';
import PostDetailsScreen from '../screens/ForumsStack/PostDetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForumsDetailsScreen from '../screens/ForumsStack/ForumsDetailsScreen';
import ForumsOverviewScreen from '../screens/ForumsStack/ForumsOverviewScreen';

import {ForumsStackParamList} from './types';

const ForumsStack = createNativeStackNavigator<ForumsStackParamList>();

const ForumsStackNavigation = () => {
  const navigationStyles = useNavigationStyles();

  return (
    <ForumsStack.Navigator
      id="ForumsStack"
      initialRouteName="ForumsOverview"
      screenOptions={{
        headerStyle: navigationStyles.headerContainer,
        headerTitleStyle: navigationStyles.headerText,
        headerTintColor: navigationStyles.headerBackButton.color,
      }}>
      <ForumsStack.Screen
        name="ForumsOverview"
        component={ForumsOverviewScreen}
        options={{
          title: 'Deine Foren',
        }}
      />
      <ForumsStack.Screen
        name="ForumsDetails"
        component={ForumsDetailsScreen}
      />
      <ForumsStack.Screen name="PostDetails" component={PostDetailsScreen} />
      <ForumsStack.Screen
        name="PostCreate"
        component={PostCreateScreen}
        initialParams={{isParentPost: true}}
      />
    </ForumsStack.Navigator>
  );
};

export default ForumsStackNavigation;
