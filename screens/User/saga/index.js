import { call, putResolve, takeLatest } from 'redux-saga/effects';
import { UserScreenActions } from '../actions';

export class UserScreenSagas {
  static USER_SCREEN_SAGA_FORK = [
    takeLatest(
      UserScreenActions.LOGIN_REQUEST,
      UserScreenSagas.sendLoginRequest
    ),
    takeLatest(
      UserScreenActions.SIGNUP_REQUEST,
      UserScreenSagas.sendSignUpRequest
    ),
  ];

  static *sendSignUpRequest(action) {
    const { email, password, username } = action.payload;

    try {
      const response = yield fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOVPhxk2mPy-BYxjOzvgra_gPhFy5AkpE',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      ).then((response) => response.json());

      if (response) {
        if (response.error)
          yield putResolve(UserScreenActions.signUpFailed(response));
        else yield putResolve(UserScreenActions.signUpSuccess(response));
      }
    } catch (err) {
      console.log('error', error);
    }
  }

  static *sendLoginRequest(action) {
    const { email, password } = action.payload;
  }
}
