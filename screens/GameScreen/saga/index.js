import { call, putResolve, takeLatest } from 'redux-saga/effects';
import { GameScreenActions } from '../actions';

export class GameScreenSagas {
  static GAME_SCREEN_SAGA_FORK = [
    takeLatest(
      GameScreenActions.SET_HISTORY_STEP,
      GameScreenSagas.setHistoryStepAPICall
    ),
  ];

  static *setHistoryStepAPICall(action) {
    const param = action.payload;

    try {
      const response = yield call(() => {
        // make api call here
        return 'test';
      }, param);

      if (response) {
        yield putResolve(
          GameScreenSagas.setHistoryStepAPICallSuccessActionCreator
        );
      }
    } catch (error) {
      console.log('error', error);
      // yield call(ErrorHandlingServices.ErrorActionService, error);
    }
  }

  static *setHistoryStepAPICallSuccessActionCreator() {
    return GameScreenActions.setHistoryStepSuccess;
  }
}
