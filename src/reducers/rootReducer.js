import { combineReducers } from "redux";

// reducers
import count from "./count";
import emptyReducer from "./emptyReducer";
import note from "./note";

export default combineReducers({ count, emptyReducer, note });
