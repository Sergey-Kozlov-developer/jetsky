import { createSlice } from "@reduxjs/toolkit";

// начальное состояние
const initialState = {
	categoryId: 0,
	sort: {
		name: "популярности",
		sortProperty: "rating",
	},
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	// methods
	reducers: {
		setCategoryId(state, action) {
			console.log("action setCategoryId", action);
			state.categoryId = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
	},
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
