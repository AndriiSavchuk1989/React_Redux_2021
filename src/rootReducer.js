import { combineReducers } from "redux";

// reducers
import count from "./count";
import emptyReducer from "./emptyReducer";

export default combineReducers({ count, emptyReducer });
