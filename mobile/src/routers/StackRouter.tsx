import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import Landing from '../pages/Landing';
import Teach from '../pages/Teach';
import TeacherTabRouter from './TeacherTabRouter';

const { Navigator, Screen } = createStackNavigator();

function StackRouter() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="Teach" component={Teach} />
        <Screen name="TeacherList" component={TeacherTabRouter} />
      </Navigator>
    </NavigationContainer>
  );
}

export default StackRouter;
