import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./services/showListThunk";
import changeSlice from "../redux/slices/EditSlice";

const store = configureStore({
    reducer: {
        product_action: changeSlice,
        todos: todosSlice,
    }
});
export default store;