import { create } from "zustand";
import debounce from "lodash.debounce";
import axios from "axios";
// import { json } from 'react-router-dom';

export const useBack = create((set) => ({
	data: [],
	fetchData: async () => {
		try {
			const response = await axios.get(
				"https://91f9067365762f2e.mokky.dev/list"
			);
			const result = response.data;
			set({ data: result });
		} catch (error) {
			console.log("Error fetching", error);
		}
	},
}));

export const useSearch = create((set) => ({
	value: "",
	searchValueTarget: debounce((event) => {
		set({ value: event.target.value });
	}, 300),
}));
