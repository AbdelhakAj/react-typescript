import { combineReducers } from "redux";

import me from "./me";
import users from "./users";

const rootReducer = combineReducers({ me, users });

export interface RootState {
  me: any;
  users: any;
}

export default rootReducer;
