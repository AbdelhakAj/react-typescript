import { takeLatest, put, call } from "redux-saga/effects";

import { loginUser } from "libs/apis";

function* loginUserSaga(action: any) {
  try {
    const data = yield call(() => loginUser(action.payload));
    yield put({ type: "LOGIN_USER_SUCCESS", payload: data.data });
  } catch (error) {
    yield put({ type: "LOGIN_USER_FAIL", payload: undefined });
  }
}

export function* watchLoginUserSaga() {
  yield takeLatest("LOGIN_USER", loginUserSaga);
}
