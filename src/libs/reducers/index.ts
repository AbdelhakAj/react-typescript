import { combineReducers } from "redux";

import count from "./counter";
import users from "./users";

const rootReducer = combineReducers({ count, users });

export interface RootState {
  users: any;
  count: number;
}

export default rootReducer;
