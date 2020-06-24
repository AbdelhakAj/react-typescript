import { takeLatest, put, call } from "redux-saga/effects";
import { get } from "lodash";

import { getUsers, getMe } from "libs/apis";

// get users

function* getUsersSaga() {
  try {
    const response = yield call(getUsers);

    const users = get(response, "data.data").map(
      ({
        _id,
        email,
        firstName,
        lastName,
      }: {
        _id: string;
        email: string;
        firstName: string;
        lastName: string;
      }) => ({
        id: _id,
        email,
        firstName,
        lastName,
      })
    );

    yield put({ type: "GET_USERS_SUCCESS", payload: users });
  } catch (error) {
    yield put({ type: "GET_USERS_FAIL", payload: undefined });
  }
}

export function* watchGetUsersSaga() {
  yield takeLatest("GET_USERS", getUsersSaga);
}

// get me

function* getMeSaga() {
  try {
    const response = yield call(getMe);
    const { _id, email, firstName, lastName } = response.data.me;

    yield put({
      type: "GET_ME_SUCCESS",
      payload: { id: _id, email, firstName, lastName },
    });
  } catch (error) {
    yield put({ type: "GET_ME_FAIL", payload: undefined });
  }
}

export function* watchGetMeSaga() {
  yield takeLatest("GET_ME", getMeSaga);
}
