import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchJetskis } from "./asyncActions";
import { Jetskis, Status } from "./types";

// начальное состояние
const initialState = {
	items: [],
	status: "loading",
};

const jetskisSlice = createSlice({
	name: "jetskins",
	initialState,
	// methods
	reducers: {
		setItems(state, action: PayloadAction<Jetskis[]>) {
			state.items = action.payload;
		},
	},
	// для синхронного запроса fetchJetskis
	extraReducers: (builder) => {
		// ниже код заменяет try|catch в axios запросе в компоненте
		builder
			.addCase(fetchJetskis.pending, (state) => {
				state.status = Status.LOADING;
				state.items = [];
			})
			.addCase(fetchJetskis.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = Status.SUCCESS;
			})
			.addCase(fetchJetskis.rejected, (state) => {
				state.status = Status.ERROR;
				state.items = [];
			});
	},
});

export const { setItems } = jetskisSlice.actions;

export default jetskisSlice.reducer;
