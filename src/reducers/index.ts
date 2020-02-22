import { combineReducers } from "redux";

import count from "./counter";

const rootReducer = combineReducers({ count });

export interface RootState {
  count: number;
}

export default rootReducer;
