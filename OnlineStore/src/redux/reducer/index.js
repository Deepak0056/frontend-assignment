import {productReducer} from "./fetchApi";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    productReducer
});

export default rootReducer;