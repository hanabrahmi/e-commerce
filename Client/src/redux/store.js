import rootReducer from "./reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
const middlewares = [thunk];

const store = createStore(
    rootReducer,
  applyMiddleware(...middlewares)
);
export default store;
