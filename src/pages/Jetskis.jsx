import { useEffect } from "react";
import ListProducts from "../components/jetskis/listProducts";
import Parametrs from "../components/jetskis/parametrs";
import { useProducts } from "../components/jetskis/useProducts";
import JetskinsSort from "../components/jetskis/sortJetskins";
import JetskisCategories from "../components/jetskis/categories";

export const Jetskis = () => {
	const fetchData = useProducts((state) => state.fetchData);
	const categoryId = useProducts((state) => state.categoryId);
	const onClickCategoryId = useProducts((state) => state.onClickCategoryId);

	useEffect(() => {
		fetchData();
		window.scrollTo(0, 0);
	}, [fetchData]);

	return (
		<>
			<div className="flex justify-between">
				<JetskisCategories
					value={categoryId}
					onChangeCategory={(i) => onClickCategoryId(i)}
				/>

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
