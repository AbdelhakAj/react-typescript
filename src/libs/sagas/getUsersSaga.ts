import { takeLatest, put, call } from "redux-saga/effects";

import { getUsers } from "libs/apis";

function* getUsersSaga() {
  try {
    const data = yield call(getUsers);
    yield put({ type: "GETDATASUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "GETDATAFAIL", payload: undefined });
  }
}

export default function* watchGetUsersSaga() {
  yield takeLatest("GETUSERS", getUsersSaga);
}
