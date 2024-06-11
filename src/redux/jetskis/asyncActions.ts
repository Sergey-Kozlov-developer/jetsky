import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Jetskis, SearchJetskisParams } from "./types";

// запрос на сервер
export const fetchJetskis = createAsyncThunk<Jetskis[], SearchJetskisParams>(
	"jetskins/fetchJetskisStatus",
	async (params) => {
		const { sortBy, category, currentPage } = params;
		const { data } = await axios.get<Jetskis[], any>(
			`https://91f9067365762f2e.mokky.dev/jetskins?page=${currentPage}&limit=3&${category}&sortBy=${sortBy}`
		);
		return data.items;
	}
);
