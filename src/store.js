import { createStore } from "redux";
import { mainReducer } from "./reducers/mainReducer";

const initialState = {};

const store = createStore(mainReducer, initialState);

export default store;
