import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainMenuScreen from '../../screens/MainMenuScreen';
import GameScreen from '../../screens/GameScreen';

const Stack = createStackNavigator();

const GameStack = () => {
  const rootOptions = {
    title: '',
    headerTransparent: true,
  };

  const homeOptions = {
    title: '',
    headerTransparent: true,
  };

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={rootOptions}>
      <Stack.Screen
        name="StartGame"
        component={MainMenuScreen}
        options={homeOptions}
      />
      <Stack.Screen name="Game" component={GameScreen} options={rootOptions} />
    </Stack.Navigator>
  );
};

export default GameStack;
