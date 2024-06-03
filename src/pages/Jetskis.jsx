import { useEffect } from "react";
import ListProducts from "../components/jetskis/listProducts";
import Parametrs from "../components/jetskis/parametrs";
import { useProducts } from "../components/jetskis/useProducts";
import JetskinsSort from "../components/jetskis/sortJetskins";
import JetskisCategories from "../components/jetskis/categories";

export const Jetskis = () => {
	const fetchData = useProducts((state) => state.fetchData);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<>
			<div className="flex justify-between">
				<JetskisCategories />

				<JetskinsSort />
			</div>
			<div className="mt-8 flex justify-between">
				<Parametrs />
				<ListProducts />
			</div>
		</>
	);
};

export default Jetskis;
