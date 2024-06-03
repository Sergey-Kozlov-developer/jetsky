import axios from "axios";
import { create } from "zustand";

export const useProducts = create((set) => ({
	data: [],
	categoryId: 0,
	sortType: 0,
	onClickCategoryId: (i) => {
		// console.log("onClickCategoryId", i);
		set({ categoryId: i });
	},
	fetchData: async () => {
		const categoryId = set({ categoryId: 0 });

		const category = categoryId > 0 ? `category=${categoryId}` : "";

		try {
			const url = `https://91f9067365762f2e.mokky.dev/items?${category}`;
			const response = await axios.get(url);
			const result = response.data;
			set({ data: result });
			console.log(url);
		} catch (error) {
			console.log("Error products fetching", error);
		}
	},
}));
