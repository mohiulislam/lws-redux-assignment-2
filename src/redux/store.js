import { createStore } from "redux";
import bookingReducer from "./counter/bookingReducer";
const store = createStore(bookingReducer);
export default store;
