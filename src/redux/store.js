import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import jetskins from "./slices/jetskisSlice";

export const store = configureStore({
	reducer: { filter, jetskins },
});
