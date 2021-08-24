import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MainMenuScreen from '../screens/MainMenuScreen';
import {Icon} from 'react-native-elements';
import constants from '../constants/constants';

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: MainMenuScreen,
      navigationOptions: ({navigation}) => {
        return {
          tabBarIcon: tabInfo => (
            <Icon name="gamepad" size={25} color={tabInfo.tintColor} />
          ),
          title: 'Play',
        };
      },
    },
  },
  {
    tabBarOptions: {
      inactiveTintColor: constants.colorPalette.rnSet3.darkBlue,
      activeTintColor: constants.colorPalette.rnSet3.lightBlue,
    },
  },
);

export default createAppContainer(MainNavigator);
