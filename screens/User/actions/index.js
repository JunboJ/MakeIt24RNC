export class UserScreenActions {
  static LOGIN_REQUEST = 'LOGIN_REQUEST';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static SIGNUP_REQUEST = 'SIGNUP_REQUEST';
  static SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
  static SIGNUP_FAILED = 'SIGNUP_FAILED';

  static sendLoginRequest(payload) {
    return {
      error: payload.error,
      payload,
      type: UserScreenActions.LOGIN_REQUEST,
    };
  }

  static loginSuccess(payload) {
    return {
      error: payload.error,
      payload,
      type: UserScreenActions.LOGIN_SUCCESS,
    };
  }

  static sendSignUpRequest(payload) {
    return {
      error: payload.error,
      payload,
      type: UserScreenActions.SIGNUP_REQUEST,
    };
  }

  static signUpSuccess(payload) {
    return {
      error: payload.error,
      payload,
      type: UserScreenActions.SIGNUP_SUCCESS,
    };
  }

  static signUpFailed(payload) {
    return {
      error: payload.error,
      payload,
      type: UserScreenActions.SIGNUP_FAILED,
    };
  }
}
