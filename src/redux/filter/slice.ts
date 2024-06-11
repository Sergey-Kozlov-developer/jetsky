import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortPropertyEnum } from "./type";

// начальное состояние
const initialState: FilterSliceState = {
	categoryId: 0,
	currentPage: 1,
	sort: {
		name: "популярные",
		sortProperty: SortPropertyEnum.RATING_DESC,
	},
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	// methods
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload;
		},
		setSort(state, action: PayloadAction<Sort>) {
			state.sort = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		// вшиваем в url
		setFilters(state, action: PayloadAction<FilterSliceState>) {
			state.currentPage = Number(action.payload.currentPage);
			state.sort = action.payload.sort;
			state.categoryId = Number(action.payload.categoryId);
		},
	},
});

export const { setCategoryId, setSort, setCurrentPage, setFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
