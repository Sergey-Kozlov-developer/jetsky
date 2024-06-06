import { useEffect, useRef, useState } from "react";
import ListProducts from "../components/jetskis/listProducts";
import Parametrs from "../components/jetskis/parametrs";
import JetskinsSort, { list } from "../components/jetskis/sortJetskins";
import JetskisCategories from "../components/jetskis/categories";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
	setCategoryId,
	setCurrentPage,
	setFilters,
} from "../redux/slices/filterSlice";
import Pagination from "../components/pagination";
import Skeleton from "../components/jetskis/skeleton";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setItems } from "../redux/slices/jetskisSlice";

export const Jetskis = () => {
	const navigate = useNavigate();
	// skeleton
	const [isLoading, setIsLoading] = useState(true);

	// если есть в url данные
	const isSearch = useRef(false);
	// первый рендер
	const isMounted = useRef(false);
	// hook redux вытаскиваем определенное из state фильтра
	const { categoryId, sort, currentPage } = useSelector(
		(state) => state.filter
	);
	const { items } = useSelector((state) => state.jetskis);

	const dispatch = useDispatch();
	// выбор категории
	const onClickCategory = (id) => {
		dispatch(setCategoryId(id));
	};
	// данные с бэка
	const fetchProducts = async () => {
		setIsLoading(true);
		const sortBy = sort.sortProperty;
		const category = categoryId > 0 ? `category=${categoryId}` : "";

		try {
			const { data } = await axios.get(
				`https://91f9067365762f2e.mokky.dev/jetskins?page=${currentPage}&limit=3&${category}&sortBy=${sortBy}`
			);
			dispatch(setItems(data.items));
		} catch (error) {
			console.log("AXIOS ERROR", error);
			alert("Ошибка при получении данных");
		} finally {
			setIsLoading(false);
		}
	};

	// если изминили параметры и был первый рендер
	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				currentPage,
			});
			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, currentPage, sort.sortProperty]);

	// если был первый рендер, то проверяем URL-параметры и сохраняем в redux
	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1));
			const sort = list.find(
				(obj) => obj.sortProperty === params.sortProperty
			);
			dispatch(setFilters({ ...params, sort }));
			isSearch.current = true;
		}
	}, []);

	// back data
	// если был первый рендер, то запрашивыем products
	useEffect(() => {
		window.scrollTo(0, 0);
		// один запрос на серв, проверка
		if (!isSearch.current) {
			fetchProducts();
		}
		isSearch.current = false;
	}, [categoryId, currentPage, sort.sortProperty]);

	const onChangePage = (number) => {
		dispatch(setCurrentPage(number));
	};

	const products = items.map((element) => (
		<ListProducts key={element.id} {...element} />
	));
	const skeletons = [...new Array(3)].map((_, index) => (
		<Skeleton key={index} />
	));

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
					{isLoading ? skeletons : products}
				</div>
			</div>
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</>
	);
};

export default Jetskis;
