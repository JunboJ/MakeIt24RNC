import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import GameScreen from '../screens/GameScreen/GameScreen';
// import HintListScreen from '../screens/HintListScreen';
// import HistoryScreen from '../screens/HistoryScreen';
// import UserScreen from '../screens/User/userScreen';
// import GameHeader from './headers/Game';
// import HomeHeader from './headers/Home';

import MainTab from './navigators/MainTab';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};

export default MainNavigator;

// const GameStack1 = createStackNavigator(
//   {
//     Home: {
//       // screen: HistoryScreen,
//       screen: MainMenuScreen,
//       navigationOptions: () => {
//         return {
//           title: '',
//         };
//       },
//     },
//     Game: {
//       screen: GameScreen,
//       navigationOptions: ({navigation}) => {
//         return {
//           headerLeft: () => <GameHeader navigation={navigation} />,
//         };
//       },
//     },
//     HintList: {
//       screen: HintListScreen,
//     },
//   },
//   {
//     // Options for the router:
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerTransparent: true,
//     },

//     // Visual options:
//     mode: Card,
//     headerMode: 'screen', //Each screen has a header attached to it and the header fades in and out together with the screen
//   },
// );

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
