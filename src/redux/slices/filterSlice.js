import { createSlice } from "@reduxjs/toolkit";

// начальное состояние
const initialState = {
	categoryId: 0,
	sort: {
		name: "популярные",
		sortProperty: "-rating",
	},
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	// methods
	// создаем action, отвечающий за действия. сохранение категорий и сортировку
	// функции как в [categoryId, setCategoryId] = useState(0)
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSort(state, action) {
			console.log("action setSort", action);
			state.sort = action.payload;
		},
	},
});

export const { setCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
