import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// запрос на сервер
export const fetchJetskis = createAsyncThunk(
	"jetskins/fetchJetskisStatus",
	async (params) => {
		const { sortBy, category, currentPage } = params;
		const { data } = await axios.get(
			`https://-91f9067365762f2e.mokky.dev/jetskins?page=${currentPage}&limit=3&${category}&sortBy=${sortBy}`
		);
		return data.items;
	}
);

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
		setItems(state, action) {
			state.items = action.payload;
		},
	},
	// для синхронного запроса fetchJetskis
	extraReducers: (builder) => {
		// ниже код заменяет try|catch в axios запросе в компоненте
		builder
			.addCase(fetchJetskis.pending, (state) => {
				state.status = "loading";
				state.items = [];
			})
			.addCase(fetchJetskis.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = "success";
			})
			.addCase(fetchJetskis.rejected, (state) => {
				state.status = "error";
				state.items = [];
			});
	},
});

export const { setItems } = jetskisSlice.actions;

export default jetskisSlice.reducer;
