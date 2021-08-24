export class GameScreenActions {
  static SET_HISTORY_STEP = "SET_HISTORY_STEP";
  static SET_HISTORY_STEP_SUCCESS = 'SET_HISTORY_STEP_SUCCESS';

  static setHistoryStep(payload) {
    return {
      error: false,
      payload,
      type: GameScreenActions.SET_HISTORY_STEP,
    };
  }

  static setHistoryStepSuccess(payload) {
      return {
          error: false,
          payload,
          type: GameScreenActions.SET_HISTORY_STEP_SUCCESS
      }
  }
}
