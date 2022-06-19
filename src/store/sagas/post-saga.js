import { call, put } from "redux-saga/effects";
import { SET_DATA } from "../actions/posts-actions";

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

function* handlePostData() {
  const res = yield call(fetchData);
  const json = yield res.json();
  yield put({ type: SET_DATA, payload: json });
}

export default handlePostData;
