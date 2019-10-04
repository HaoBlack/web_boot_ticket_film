import { createStore, compose, applyMiddleware } from "redux";
import Reducers from "./reducers/index";
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  Reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
