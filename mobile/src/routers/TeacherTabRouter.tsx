import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function TeacherTabRouter() {
  return (
    <Navigator tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
      },
      tabStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        marginLeft: 16,
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
      },
      activeBackgroundColor: '#ebebf5',
      activeTintColor: '#32264d',
      inactiveBackgroundColor: '#fafafc',
      inactiveTintColor: '#c1bccc',
    }}>
      <Screen
        name="Teachers"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ size, color, focused }) => <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />,
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ size, color, focused }) => <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />,
        }}
      />
    </Navigator>
  );
}

export default TeacherTabRouter;
