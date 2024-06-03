import axios from "axios";
import { create } from "zustand";

export const useProducts = create((set) => ({
	data: [],
	categoryId: 0,
	sortType: 0,
	onClickCategoryId: (i) => {
		console.log("onClickCategoryId", i);
		// set({ categoryId: 0 });
		// set({ categoryId: data.id });
	},
	fetchData: async () => {
		try {
			const response = await axios.get(
				"https://91f9067365762f2e.mokky.dev/products"
			);
			const result = response.data;
			set({ data: result });
		} catch (error) {
			console.log("Error products fetching", error);
		}
	},
}));
