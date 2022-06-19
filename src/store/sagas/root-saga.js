import { takeLatest } from "redux-saga/effects";
import { GET_DATA } from "../actions/posts-actions";
import handlePostData from "./post-saga";

function* root() {
  yield takeLatest(GET_DATA, handlePostData);
}

export default root;
