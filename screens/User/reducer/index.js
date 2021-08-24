import { UserScreenActions } from '../actions';

const initialState = {
  isLogin: false,
  userName: null,
  error: null,
  token: null,
  expiresIn: null,
  email: null,
  userId: null,
};

const userScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserScreenActions.LOGIN_SUCCESS:
      return { ...state, isLogin: true };

    case UserScreenActions.SIGNUP_SUCCESS:
      return {
        ...state,
        isLogin: true,
        token: action.payload.idToken,
        expiresIn: action.payload.expiresIn,
        email: action.payload.email,
      };

    case UserScreenActions.SIGNUP_FAILED:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default userScreenReducer;
