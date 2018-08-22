import { createAction, handleActions } from "redux-actions";

const INCREASE = "base/INCREASE";

export const increaseAction = createAction(INCREASE);

const INITIAL_STATE = {
  count: 0
};

export default handleActions(
  {
    [INCREASE]: (state, action) => ({
      count: state.count + action.payload.number
    })
  },
  INITIAL_STATE
);
