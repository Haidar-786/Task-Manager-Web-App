import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "../Reducers/Rootreducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
