import {takeEvery} from "redux-saga/effects";
import types from '../actionsTypes'
import {fetchUserSaga} from "../saga/sagas";

export function* watchSaga() {
  yield takeEvery(types.FETCH_USER, fetchUserSaga);
}
