import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameStack from './GameStack';
import UserScreen from '../../screens/User/userScreen';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'sports-esports';
          }

          if (route.name === 'User') {
            iconName = 'account-circle';
          }

          return <Icon name={iconName} size={25} color={color} />;
        },
        title: '',
        headerTransparent: true,
      })}
    >
      <Tab.Screen
        name="Home"
        component={GameStack}
        options={{ tabBarLabel: 'Play' }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{ tabBarLabel: 'My Profile' }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
