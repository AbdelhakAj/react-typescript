import { all, fork } from "redux-saga/effects";

import { watchLoginUserSaga } from "./loginUserSaga";
import { watchGetUsersSaga, watchGetMeSaga } from "./getUsersSaga";

export default function* rootSaga() {
  yield all([
    fork(watchLoginUserSaga),
    fork(watchGetUsersSaga),
    fork(watchGetMeSaga),
  ]);
}
