import { useEffect } from "react";
import JetskisCategories from "../components/jetskis";
import ListProducts from "../components/jetskis/listProducts";
import Parametrs from "../components/jetskis/parametrs";
import { useProducts } from "../components/jetskis/useProducts";

export const Jetskis = () => {
	const fetchData = useProducts((state) => state.fetchData);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<>
			<JetskisCategories />
			<div className="mt-8 flex justify-between">
				<Parametrs />
				<ListProducts />
			</div>
		</>
	);
};

export default Jetskis;
