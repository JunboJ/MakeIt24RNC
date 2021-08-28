import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonCustom from '../components/buttonCustom/ButtonCustom';
import constants from '../constants/constants';

import {Icon} from 'react-native-elements';
// import Ball from '../components/animation/Animated';

const MainMenuScreen = ({navigation}) => {
  const startGameHandler = () => {
    navigation.navigate('Game');
  };

  const onLoginPressedHandler = useCallback(() => {
    navigation.navigate('User');
  }, []);

  return (
    <View style={styles.mainMenu}>
      <View style={styles.controlSet}>
        <ButtonCustom
          onPressHandler={startGameHandler}
          size="large"
          title="PLAY"
          style={{width: 200, borderRadius: 10}}>
          {/* <Icon
            name="play"
            size={40}
            type="feather"
            color={constants.colorPalette.rnSet3.white}
          /> */}
        </ButtonCustom>
      </View>
      <View style={{marginTop: 20}}>
        <ButtonCustom
          size="medium"
          title="Sign In"
          colorTheme="lightWarning"
          textColor={constants.colorPalette.rnSet3.red}
          onPressHandler={onLoginPressedHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainMenu: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: constants.colorPalette.rnSet3.white,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
  },
  scrollView: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
  },
  recursiveCard: {
    width: '100%',
    flexDirection: 'row',
  },
  controlSet: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
});

export default MainMenuScreen;
