import axios from "axios";
import { create } from "zustand";

export const useProducts = create((set) => ({
	data: [],
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
