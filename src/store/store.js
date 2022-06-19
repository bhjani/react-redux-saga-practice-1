import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./reducers/counter-reducer";
import postsReducer from "./reducers/posts-reducer";
import createSagaMiddleware from "redux-saga";
import root from "./sagas/root-saga";

const reducer = combineReducers({
  count: counterReducer,
  post: postsReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(root);

export default store;
