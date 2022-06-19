import * as ACTIONS from "../actions/posts-actions";

const initalState = {
  data: []
};

function postsReducer(state = initalState, action) {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      // console.log(action);
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
}

export default postsReducer;
