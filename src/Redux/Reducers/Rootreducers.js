import { combineReducers } from "redux";
import loginReducer from "../Reducers/LoginReducers";
import taskreducer from "../Reducers/TaskReducers";
import userreducer from "../Reducers/UserReducers";
const rootReducer = combineReducers({
  login: loginReducer,
  tasks: taskreducer,
  users: userreducer
});

export default rootReducer;
