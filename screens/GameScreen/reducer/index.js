import { GameScreenActions } from '../actions';

const initialState = {
  history: null,
};

const gameScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GameScreenActions.SET_HISTORY_STEP_SUCCESS:
      return { ...state };
    default:
      return state;
  }
};

export default gameScreenReducer;
