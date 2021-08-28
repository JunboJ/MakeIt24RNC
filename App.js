import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createRootReducer, rootSaga } from './store/reducer/rootReducer';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/mainNavigator';
import ButtonCustom from './components/buttonCustom/ButtonCustom';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainMenuScreen from './screens/MainMenuScreen';
import { createStackNavigator } from '@react-navigation/stack';
import GameStack from './navigation/navigators/GameStack';

const initialStore = {};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  createRootReducer(),
  initialStore,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
const Stack = createStackNavigator();

const App = () => {
  const rootOptions = {
    title: 'Test',
  };

  const homeOptions = {
    title: '',
  };

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  fsTest: {
    fontSize: 30,
  },
});

export default App;
