import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootRerducer from "./reducers/index";

const store = createStore(rootRerducer, applyMiddleware(thunk, logger));

// dispatch => action kedalam reducer
// dispatch => action / function kedalam : middleware  || reducer

export default store;
