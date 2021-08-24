import React from 'react';
import {Card} from 'react-native-elements/dist/card/Card';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

// import GameScreen from '../screens/GameScreen/GameScreen';
// import HintListScreen from '../screens/HintListScreen';
// import HistoryScreen from '../screens/HistoryScreen';
import MainMenuScreen from '../screens/MainMenuScreen';
// import UserScreen from '../screens/User/userScreen';
// import GameHeader from './headers/Game';
// import HomeHeader from './headers/Home';

import Icon from 'react-native-vector-icons/FontAwesome5';
import constants from '../constants/constants';

const options = {
  headerMode: 'screen',
  defaultNavigationOptions: {
    headerTransparent: true,
  },
  navigationOptions: {
    headerStyle: {},
  },
};

const GameStack = createStackNavigator(
  {
    Home: {
      // screen: HistoryScreen,
      screen: MainMenuScreen,
      navigationOptions: () => {
        return {
          title: '',
        };
      },
    },
    // Game: {
    //   screen: GameScreen,
    //   navigationOptions: ({navigation}) => {
    //     return {
    //       headerLeft: () => <GameHeader navigation={navigation} />,
    //     };
    //   },
    // },
    // HintList: {
    //   screen: HintListScreen,
    // },
  },
  {
    // Options for the router:
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTransparent: true,
    },

    // Visual options:
    mode: Card,
    headerMode: 'screen', //Each screen has a header attached to it and the header fades in and out together with the screen
  },
);

// const MainNavigator = createBottomTabNavigator(
//   {
//     GameStack: {
//       screen: GameStack,
//       navigationOptions: ({navigation}) => {
//         return {
//           tabBarIcon: tabInfo => (
//             <Icon name="gamepad" size={25} color={tabInfo.tintColor} />
//           ),
//           title: 'Play',
//         };
//       },
//     },
//     Login: {
//       screen: UserScreen,
//       navigationOptions: ({navigation}) => {
//         return {
//           tabBarIcon: tabInfo => (
//             <Icon name="user-circle" size={25} color={tabInfo.tintColor} />
//           ),
//           title: 'My Profile',
//         };
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       inactiveTintColor: constants.colorPalette.rnSet3.darkBlue,
//       activeTintColor: constants.colorPalette.rnSet3.lightBlue,
//     },
//   },
// );

export default createAppContainer(GameStack);
