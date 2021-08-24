import React from 'react';
// import MainNavigator from './navigation/mainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import ButtonCustom from './components/buttonCustom/ButtonCustom';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createRootReducer, rootSaga} from './store/reducer/rootReducer';

const initialStore = {};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  createRootReducer(),
  initialStore,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Provider store={store}>
          {/* <MainNavigator /> */}
          <ButtonCustom>
            <Text>BUTTON</Text>
          </ButtonCustom>
          <Text style={styles.fsTest}>BUTTON</Text>
        </Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  fsTest: {
    fontSize: 30,
  },
});

export default App;
