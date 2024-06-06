import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import jetskis from "./slices/jetskisSlice";

export const store = configureStore({
	reducer: { filter, jetskis },
});
