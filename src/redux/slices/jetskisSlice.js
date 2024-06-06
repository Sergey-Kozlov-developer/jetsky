import { createSlice } from "@reduxjs/toolkit";

// начальное состояние
const initialState = {
	items: [],
};

const jetskisSlice = createSlice({
	name: "jetskis",
	initialState,
	// methods
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
});

export const { setItems } = jetskisSlice.actions;

export default jetskisSlice.reducer;
