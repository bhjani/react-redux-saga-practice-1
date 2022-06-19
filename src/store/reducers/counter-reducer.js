import * as ACTIONS from "../actions/conter-actions";

const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.INCREAMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREAMNENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default counterReducer;
