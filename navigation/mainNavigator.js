import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainTab from './navigators/MainTab';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};

export default MainNavigator;
