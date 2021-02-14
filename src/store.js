import { createStore, applyMiddleware } from "redux";
import { flashCardReducer } from "./reducers/flashCardReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// const initialState = {};

const middleware = [thunk];

const store = createStore(
  flashCardReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
