import { RootState } from "@reduxjs/toolkit/query";

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
