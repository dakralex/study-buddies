import React from 'react';
import {ForumsStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForumsOverviewScreen from '../screens/ForumsStack/ForumsOverviewScreen';
import ForumsDetailsScreen from '../screens/ForumsStack/ForumsDetailsScreen';
import PostCreateScreen from '../screens/ForumsStack/PostCreateScreen';
import PostDetailsScreen from '../screens/ForumsStack/PostDetailsScreen';

const ForumsStack = createNativeStackNavigator<ForumsStackParamList>();

const ForumsStackNavigation = () => {
  return (
    <ForumsStack.Navigator
      id="ForumsStack"
      initialRouteName="ForumsOverview"
      screenOptions={{headerShown: false}}>
      <ForumsStack.Screen
        name="ForumsOverview"
        component={ForumsOverviewScreen}
      />
      <ForumsStack.Screen
        name="ForumsDetails"
        component={ForumsDetailsScreen}
      />
      <ForumsStack.Screen name="PostDetails" component={PostDetailsScreen} />
      <ForumsStack.Screen name="PostCreate" component={PostCreateScreen} />
    </ForumsStack.Navigator>
  );
};

export default ForumsStackNavigation;
