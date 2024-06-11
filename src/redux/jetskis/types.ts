export type Jetskis = {
	id: number;
	name: string;
	price: number;
	img: string;
	// hp: PropTypes.string,
	category: number;
	rating: number;
};

export enum Status {
	LOADING = "loading",
	SUCCESS = "completed",
	ERROR = "error",
}

export type SearchJetskisParams = {
	sortBy: string;
	// order: string;
	category: string;
	// search: string;
	currentPage: string;
};

export interface JetskisSliceState {
	items: Jetskis[];
	status: Status;
}
