import {createStore} from "redux";
import {CustomerReducer} from "../reducers/CustomerReducer";

export const store = createStore(CustomerReducer)