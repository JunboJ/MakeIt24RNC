import React, { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import ButtonCustom from '../../components/buttonCustom/ButtonCustom';
import constants from '../../constants/constants';
import { Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { UserScreenActions } from './actions';

const UserScreen = () => {
  const dispatch = useDispatch();

  const { isLogin, userName, error, token } = useSelector(
    (store) => store.user
  );

  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');

  const onEmailInputHandler = (value) => {
    setEmailState(value);
  };

  const onPasswordInputHandler = (value) => {
    setPasswordState(value);
  };

  const onSignIn = () => {};

  const onSignUpHandler = useCallback(() => {
    const action = UserScreenActions.sendSignUpRequest({
      email: emailState,
      password: passwordState,
    });

    dispatch(action);
  }, [dispatch, emailState, passwordState]);

  return (
    <SafeAreaView>
      <View style={styles.userScreen}>
        <View>
          <Icon
            name="face"
            size={80}
            color={constants.colorPalette.rnDisabled.darkGray}
            style={styles.userIcon}
          />
        </View>
        <View style={styles.form}>
          <Input
            placeholder="Enter your email"
            label="Email Address"
            leftIcon={<Icon name="mail-outline" color="grey" size={16} />}
            autoCapitalize="none"
            onChangeText={onEmailInputHandler}
            errorMessage={
              error && error.message === 'INVALID_EMAIL'
                ? 'Invalid email address'
                : ''
            }
          ></Input>
          <Input
            placeholder="Enter your password"
            label="Enter Password"
            leftIcon={<Icon name="vpn-key" color="grey" size={16} />}
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={onPasswordInputHandler}
          ></Input>
        </View>
        <View style={styles.formControls}>
          {isLogin ? (
            <ButtonCustom title="Sign Out" style={styles.loginButton} />
          ) : (
            <ButtonCustom title="Sign In" style={styles.loginButton} />
          )}
          <ButtonCustom
            colorTheme="yellow"
            textColor={constants.colorPalette.rnSet3.darkYellow}
            title="Join Now"
            style={styles.loginButton}
            onPressHandler={onSignUpHandler}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userScreen: {
    marginTop: 100,
    alignItems: 'center',
    height: '100%',
  },
  userIcon: {},
  loginButton: {
    marginTop: 10,
  },
  form: {
    marginTop: 50,
    width: '70%',
  },
  formControls: {
    flexDirection: 'row',
  },
});

export default UserScreen;
