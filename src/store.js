import { createStore } from "redux";
import { productFilterReducer } from "./reducers";

const store = createStore(productFilterReducer);
export default store;
