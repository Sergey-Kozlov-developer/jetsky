import { useEffect, useState } from "react";
import ListProducts from "../components/jetskis/listProducts";
import Parametrs from "../components/jetskis/parametrs";
import JetskinsSort from "../components/jetskis/sortJetskins";
import JetskisCategories from "../components/jetskis/categories";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

export const Jetskis = () => {
	// данные с бэка
	const [data, setData] = useState([]);
	// сортировка
	const [sortType, setSortType] = useState(0);
	// skeleton
	// const [isLoading, setIsLoading] = useState(true);

	// hook redux вытаскиваем определенное из state фильтра
	const { categoryId, sort } = useSelector((state) => state.filter);

	// логика redux
	// фильтр по категории

	// useDispatch отдает, то что надо получить и передается в reducer, меняем состояние
	// и перерисовывает компонет
	const dispatch = useDispatch();
	// useDispatch отдает, то что мы хотим поменять
	const onClickCategory = (id) => {
		dispatch(setCategoryId(id));
	};
	console.log(categoryId);

	useEffect(() => {
		// setIsLoading(true);
		const order = sort.sortProperty.includes("-") ? "asc" : "desc";
		const sortBy = sort.sortProperty.replace("-", "");
		const category = categoryId > 0 ? `category=${categoryId}` : "";
		axios
			.get(`https://91f9067365762f2e.mokky.dev/items?${category}`)
			.then((res) => {
				setData(res.data);
				// setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType, sort.sortProperty]);

	return (
		<>
			<div className="flex justify-between">
				<JetskisCategories
					value={categoryId}
					onClickCategory={onClickCategory}
				/>

				<JetskinsSort
					value={sortType}
					onChangeSort={(i) => setSortType(i)}
				/>
			</div>
			<div className="mt-8 flex justify-between">
				<Parametrs />
				<div className="mx-auto grid w-4/5 grid-cols-3 gap-5">
					{data.map((element) => (
						<ListProducts key={element.id} {...element} />
					))}
				</div>
			</div>
		</>
	);
};

export default Jetskis;
