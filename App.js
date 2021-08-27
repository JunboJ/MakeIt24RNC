import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createRootReducer, rootSaga} from './store/reducer/rootReducer';
import {NavigationContainer} from '@react-navigation/native';
// import MainNavigator from './navigation/mainNavigator';
import ButtonCustom from './components/buttonCustom/ButtonCustom';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';

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
    <SafeAreaProvider>
      <SafeAreaView>
        <NavigationContainer>
          <Provider store={store}>
            {/* <MainNavigator /> */}
            <ButtonCustom>
              <Text>BUTTON</Text>
            </ButtonCustom>
            <Text style={styles.fsTest}>ADD</Text>
            <Icon name="smile" type="feather" size={30} color="#900" />
          </Provider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  fsTest: {
    fontSize: 30,
  },
});

export default App;
