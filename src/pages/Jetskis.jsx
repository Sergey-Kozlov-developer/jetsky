import { useEffect, useState } from "react";
import ListProducts from "../components/jetskis/listProducts";
import Parametrs from "../components/jetskis/parametrs";
import JetskinsSort from "../components/jetskis/sortJetskins";
import JetskisCategories from "../components/jetskis/categories";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import Pagination from "../components/pagination";

export const Jetskis = () => {
	// skeleton
	// const [isLoading, setIsLoading] = useState(true);
	// hook redux вытаскиваем определенное из state фильтра
	// данные с бэка
	const [items, setItems] = useState([]);
	const { categoryId, sort, currentPage } = useSelector(
		(state) => state.filter
	);

	const dispatch = useDispatch();
	// выбор категории
	const onClickCategory = (id) => {
		dispatch(setCategoryId(id));
	};

	useEffect(() => {
		// setIsLoading(true);
		const sortBy = sort.sortProperty;
		const category = categoryId > 0 ? `category=${categoryId}` : "";
		axios
			.get(
				`https://91f9067365762f2e.mokky.dev/jetskins?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}`
			)
			.then((res) => {
				setItems(res.data.items);
				// setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, currentPage, sort.sortProperty]);

	const onChangePage = (number) => {
		dispatch(setCurrentPage(number));
	};

	return (
		<>
			<div className="flex justify-between">
				<JetskisCategories
					value={categoryId}
					onClickCategory={onClickCategory}
				/>

				<JetskinsSort />
			</div>
			<div className="mt-8 flex justify-between">
				<Parametrs />
				<div className="mx-auto grid w-4/5 grid-cols-3 gap-5">
					{items.map((element) => (
						<ListProducts key={element.id} {...element} />
					))}
				</div>
			</div>
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</>
	);
};

export default Jetskis;
