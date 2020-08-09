import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function TeacherTabRouter() {
  return (
    <Navigator>
      <Screen name="Landing" component={TeacherList} />
      <Screen name="Teach" component={Favorites} />
    </Navigator>
  );
}

export default TeacherTabRouter;
