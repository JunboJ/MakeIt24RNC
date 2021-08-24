import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import gameScreenReducer from '../../screens/GameScreen/reducer';
import userScreenReducer from '../../screens/User/reducer';
import { GameScreenSagas } from '../../screens/GameScreen/saga';
import { UserScreenSagas } from '../../screens/User/saga';

export const createRootReducer = () => {
  return combineReducers({
    user: userScreenReducer,
    game: gameScreenReducer,
  });
};

export function* rootSaga() {
  yield all(GameScreenSagas.GAME_SCREEN_SAGA_FORK);
  yield all(UserScreenSagas.USER_SCREEN_SAGA_FORK);
}
