import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootRerducer from "./reducers/index";

const store = createStore(rootRerducer, applyMiddleware(thunk));


// dispatch => action kedalam reducer
// dispatch => action / function kedalam : middleware  || reducer

export default store;
